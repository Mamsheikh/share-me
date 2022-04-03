import React from 'react';
import Loader, { Circles } from 'react-loader-spinner';

export const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Circles color='#00BFFF' height={50} width={50} />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
};
