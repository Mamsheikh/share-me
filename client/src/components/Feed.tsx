import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '../components';
import {
  Post,
  useFeedLazyQuery,
  useSearchLazyQuery,
} from '../generated/graphql';

export const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const [feed, { loading: feedLoading }] = useFeedLazyQuery({
    onCompleted: (data) => {
      setPins(data.feed);
    },
  });
  const [search] = useSearchLazyQuery();
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
  console.log('feed', pins);
  if (loading) {
    return <Spinner message='We are adding ideas to your feed' />;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};
