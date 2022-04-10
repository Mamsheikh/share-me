import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '../components';
import { User } from '../container/Home';
import { useFeedLazyQuery, useSearchLazyQuery } from '../generated/graphql';

interface Props {
  user: User;
}

export const Feed: React.FC<Props> = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [feed, { loading: feedLoading }] = useFeedLazyQuery({
    onCompleted: (data) => {
      setPins(data.feed);
    },
  });
  const [search] = useSearchLazyQuery({
    onCompleted: (data) => {
      setPins(data.search);
    },
  });
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      search({
        variables: {
          searchTerm: categoryId,
        },
      });
    } else {
      feed();
    }
  }, [categoryId, search, feed]);
  // console.log('feed', pins);
  if (!pins) return <h2 className='text-center font bold'>No Pins found😞</h2>;
  if (feedLoading) {
    return <Spinner message='We are adding ideas to your feed' />;
  }
  return <div>{pins && <MasonryLayout pins={pins} user={user} />}</div>;
};
