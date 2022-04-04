import React from 'react';
import { Post } from '../generated/graphql';

interface Props {
  pin: Post;
  className: string;
}

export const Pin: React.FC<Props> = ({ pin, className }) => {
  return <img className='rounded-lg w-full' src={pin?.image} alt='' />;
};
