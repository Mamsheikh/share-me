import { objectType } from 'nexus';

//User Model
export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id'), t.string('name'), t.string('email'), t.string('image');
  },
});

//Post Model
export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id'),
      t.string('caption'),
      // t.string('email'),
      t.string('image');
  },
});

export const Favorite = objectType({
  name: 'Favorite',
  definition(t) {
    t.string('id');
  },
});
