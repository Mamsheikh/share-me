import { enumType, objectType } from 'nexus';

//User Model
export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id'),
      t.string('name'),
      t.string('email'),
      t.string('image'),
      t.field('role', {
        type: Role,
      }),
      t.nonNull.list.nonNull.field('posts', {
        type: 'Post',
        async resolve(root, _args, ctx) {
          return await ctx.prisma.user
            .findUnique({
              where: {
                id: root.id,
              },
              rejectOnNotFound: true,
            })
            .posts();
        },
      });
    t.nullable.list.field('favorites', {
      type: 'Favorite',
      async resolve(root, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: root.id,
            },
            rejectOnNotFound: true,
          })
          .favorites();
      },
    });
    t.list.field('comments', {
      type: 'Comment',
      resolve(root, _, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: { id: root.id },
            rejectOnNotFound: true,
          })
          .comments();
      },
    });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['FREE', 'SUBSCRIBED'],
});
