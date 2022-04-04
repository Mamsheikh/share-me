import React from 'react';
import Masonry from 'react-masonry-css';
import { Pin } from '../components';
import { Post } from '../generated/graphql';

interface Props {
  pins: Post[];
}

const breakPoints = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

export const MasonryLayout: React.FC<Props> = ({ pins }) => {
  return (
    <Masonry className='flex animate-slide-fwd' breakpointCols={breakPoints}>
      {pins.map((pin) => (
        <Pin key={pin.id} pin={pin} className='w-max' />
      ))}
    </Masonry>
  );
};
