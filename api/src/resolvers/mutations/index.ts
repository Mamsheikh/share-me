const { OAuth2Client } = require('google-auth-library');
import { UserInputError } from 'apollo-server-core';
import { extendType, mutationField, nonNull, stringArg } from 'nexus';
import {
  createTokens,
  getRefreshCookie,
  removeRefreshCookie,
} from '../../utils/auth';
import { User } from '../models';
import { AuthPayload } from '../payloads';

const oAuth2Client = new OAuth2Client({
  clientId: process.env.GOOGLE_ID,
  // redirectUri: <your_redirect_uri>
});

export const UserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    //Create User
    t.field('googleLogin', {
      type: AuthPayload,
      args: {
        tokenId: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        try {
          const clientId = process.env.GOOGLE_ID;
          const { payload } = await oAuth2Client.verifyIdToken({
            idToken: args.tokenId,
            audience: clientId,
          });
          // console.log(payload);
          if (payload.email_verified) {
            const user = await ctx.prisma.user.findUnique({
              where: { email: payload.email },
              // rejectOnNotFound: true,
            });

            if (!user) {
              const newUser = await ctx.prisma.user.create({
                data: {
                  name: payload.name,
                  email: payload.email,
                  image: payload.picture,
                },
              });
              const { accessToken } = await createTokens(
                { userId: newUser.id },
                ctx
              );
              return {
                user: newUser,
                accessToken,
              };
            }

            const { accessToken } = await createTokens(
              { userId: user.id },
              ctx
            );
            return {
              user,
              accessToken,
            };
          }
        } catch (error) {
          throw new Error(`failed to login with google: ${error}`);
        }
      },
    });
  },
});

export const refreshAuth = mutationField('refreshAuth', {
  type: nonNull(AuthPayload),
  resolve: async (_root, _args, ctx) => {
    const refreshCookie = getRefreshCookie(ctx);
    if (!refreshCookie) throw new Error('invalid cookie');

    const user = await ctx.prisma.user.findFirst({
      where: { id: refreshCookie.userId },
    });
    if (!user) throw new UserInputError('invalid user');

    const { accessToken } = await createTokens({ userId: user.id }, ctx);

    return { user: user, accessToken };
  },
});

export const logout = mutationField('logout', {
  type: nonNull(User),
  resolve: async (_root, _args, ctx) => {
    const refreshCookie = getRefreshCookie(ctx);
    if (!refreshCookie) {
      throw new Error('invalid cookie');
    }

    removeRefreshCookie(ctx);

    return await ctx.prisma.user.findFirst({
      where: { id: refreshCookie.userId },
      rejectOnNotFound: true,
    });
  },
});
