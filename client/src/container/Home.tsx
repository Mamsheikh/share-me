import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import { Pins } from '../container/Pin';

import logo from '../assets/logo.png';

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface Props {
  user: User;
}
const Home = ({ user }: Props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const srollRef = useRef(null);

  useEffect(() => {
    srollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} />
      </div>
      <div className='flex md:hidden flex-row '>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu
            size={40}
            onClick={() => setToggleSidebar(true)}
            className='cursor-pointer'
          />
          <Link to='/'>
            <img src={logo} alt='logo' className='w-28' />
          </Link>
          <Link to={`/user-profile/${user?.id}`}>
            <img
              className='rounded-full object-cover w-28 '
              src={user?.image}
              alt='logo'
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full justify-end flex items-center p-2'>
              <AiFillCloseCircle
                size={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={srollRef}>
        <Routes>
          <Route
            path='/user-profile/:userId'
            element={<UserProfile user={user} />}
          />
          <Route path='/*' element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
