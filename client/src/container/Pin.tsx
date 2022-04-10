import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { CreatePin, Feed, Navbar, PinDetail, Search } from '../components';
import { User } from './Home';

interface Props {
  user: User;
}
export const Pins: React.FC<Props> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div className='px-2 md:px-51'>
      <div className='bg-gray-50'>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed user={user} />} />
          <Route path='/category/:categoryId' element={<Feed user={user} />} />
          <Route path='/pin/:pinId' element={<PinDetail user={user} />} />
          <Route path='/create-pin' element={<CreatePin user={user} />} />
          <Route
            path='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
