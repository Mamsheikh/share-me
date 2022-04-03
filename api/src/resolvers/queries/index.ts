import { UserInputError } from 'apollo-server-core';
import { extendType, nonNull, stringArg } from 'nexus';
import { getRefreshCookie, createTokens } from '../../utils/auth';
import { AuthPayload } from '../payloads';

export const UserQueries = extendType({
  type: 'Query',
  definition(t) {
    //users
    t.nullable.list.nonNull.field('users', {
      type: 'User',
      async resolve(_, args, ctx) {
        return [];
      },
    });

    //User by Id

    t.nullable.field('getUser', {
      type: 'User',
      args: {},
      async resolve(_, args, ctx) {
        return null;
      },
    });
    t.field('me', {
      type: 'User',
      resolve: async (_root, _args, ctx) => {
        const refreshCookie = getRefreshCookie(ctx);
        if (!refreshCookie) throw new Error('invalid cookie');
        console.log(refreshCookie);
        const user = await ctx.prisma.user.findFirst({
          where: { id: refreshCookie.userId },
        });
        // console.log(user);
        if (!user) throw new UserInputError('not authenticated');

        // const { accessToken } = await createTokens({ userId: user.id }, ctx);

        return user;
      },
    });

    t.list.field('search', {
      type: 'Post',
      args: {
        searchTerm: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        try {
          const query = await ctx.prisma.post.findMany({
            where: {
              OR: [
                { title: { contains: args.searchTerm, mode: 'insensitive' } },
                { about: { contains: args.searchTerm, mode: 'insensitive' } },
                {
                  categories: {
                    some: {
                      name: { contains: args.searchTerm, mode: 'insensitive' },
                    },
                  },
                },
              ],
            },
          });
          return query;
        } catch (error) {
          throw new Error(`failed to search pins: ${error}`);
        }
      },
    });
  },
});
