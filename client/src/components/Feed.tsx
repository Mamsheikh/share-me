import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '../components';

export const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
    } else {
    }
  }, [categoryId]);

  if (loading) {
    return <Spinner message='We are adding ideas to your feed' />;
  }
  return <div>Feed</div>;
};
