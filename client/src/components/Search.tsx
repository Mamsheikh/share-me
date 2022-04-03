import React from 'react';

interface Props {
  searchTerm: string;
  setSearchTerm: (value) => void;
}

export const Search: React.FC<Props> = () => {
  return <div>Search</div>;
};
