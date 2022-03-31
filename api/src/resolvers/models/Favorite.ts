import { objectType } from 'nexus';

export const Favorite = objectType({
  name: 'Favorite',
  definition(t) {
    t.nonNull.string('id'),
      t.nonNull.string('userId'),
      t.list.field('posts', {
        type: 'Post',
        resolve(root, __, ctx) {
          return ctx.prisma.favorite
            .findUnique({
              where: { id: root.id },
              rejectOnNotFound: true,
            })
            .posts();
        },
      }),
      t.nonNull.field('user', {
        type: 'User',
        resolve(root, __, ctx) {
          return ctx.prisma.favorite
            .findUnique({
              where: { id: root.id },
              rejectOnNotFound: true,
            })
            .user();
        },
      });
  },
});
