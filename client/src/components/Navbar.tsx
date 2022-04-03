import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { User } from '../container/Home';

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  user: User;
}

export const Navbar = ({ searchTerm, setSearchTerm, user }: Props) => {
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className='flex gap-2 md:gap-5 w-full pb-7 mt-5'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch size={21} className='ml-1' />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search'
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className='p-2 bg-white outline-none w-full'
          type='text'
        />
      </div>
      <div className='flex gap-3'>
        <Link to={`user-profile/${user?.id}`} className='hidden md:block'>
          <img className='w-14 h-12 rounded-lg' src={user.image} alt='user' />
        </Link>
        <Link to='create-pin'>
          <IoMdAdd className='bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center' />
        </Link>
      </div>
    </div>
  );
};
