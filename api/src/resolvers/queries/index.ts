import { extendType } from 'nexus';

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
  },
});
