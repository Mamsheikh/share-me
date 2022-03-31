import { extendType } from 'nexus';

export const UserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    //Create User
    t.field('createUser', {
      type: 'User',
      async resolve(_, args, ctx) {
        return null;
      },
    });
  },
});
