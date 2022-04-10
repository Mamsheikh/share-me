import React, { useState, useEffect } from 'react';

import { Spinner, MasonryLayout } from '../components';
import { useSearchLazyQuery } from '../generated/graphql';

interface Props {
  searchTerm: string;
  setSearchTerm: (value) => void;
}

export const Search: React.FC<Props> = ({ searchTerm }) => {
  const [search, { loading }] = useSearchLazyQuery({
    onCompleted: (data) => {
      setPins(data.search);
      console.log(data.search);
    },
  });
  const [pins, setPins] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      search({
        variables: {
          searchTerm,
        },
      });
    }
  }, [searchTerm, search]);
  return (
    <div>
      {loading && <Spinner message='Searching for pins...' />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== '' && (
        <div className='mt-10 text-center text-xl'>No Pins found!😥</div>
      )}
    </div>
  );
};
