import React, { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { MasonryLayout, Spinner } from '../components';
import { User } from '../container/Home';
import { useGetUserQuery, useLogoutMutation } from '../generated/graphql';

const randomImage =
  'https://source.unsplash.com/1600x900/?nature,photography,technology';

const activeBtnStyles =
  'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles =
  'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';
interface Props {
  user: User;
}

export const UserProfile: React.FC<Props> = ({ user }) => {
  const [logout] = useLogoutMutation({
    onCompleted: (data) => {
      navigate('/login');
      window.location.reload();
    },
  });
  const { userId } = useParams();
  const { data, loading } = useGetUserQuery({
    variables: {
      userId,
    },
  });
  // const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [activeBtn, setActiveBtn] = useState('created');
  const navigate = useNavigate();

  useEffect(() => {
    if (activeBtn === 'created') {
      setPins(data?.getUser?.posts);
    } else {
      let saves = [];
      data?.getUser?.save.map((pin) => saves.push(pin.post));
      setPins(saves);
    }
  }, [data?.getUser, activeBtn]);
  // console.log('save', data?.getUser?.save.);
  // console.log('created', data?.getUser?.posts);

  if (loading) {
    return <Spinner message='Loading Profile...' />;
  }

  return (
    <div className='relative pb-2 h-full justify-center items-center'>
      <div className='flex flex-col pb-5'>
        <div className='relative flex flex-col mb-7'>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='w-full h-370 2xl:510 shadow-lg object-cover'
              src={randomImage}
              alt='banner-pic'
            />
            <img
              className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
              src={data?.getUser?.image}
              alt=''
            />
            <h1 className='font-bold text-3xl text-center mt-3'>
              {data?.getUser?.name}
            </h1>
            <div className='absolute top-0 z-1 right-0 p-2'>
              {user?.id === data?.getUser?.id && (
                <button
                  onClick={() => logout()}
                  className='bg-white p-2 rounded-full cursor-pointer outline-none shadow-md'
                >
                  <AiOutlineLogout color='red' size={21} />
                </button>
              )}
            </div>
          </div>
          <div className='text-center mb-7'>
            <button
              type='button'
              onClick={(e) => {
                // setText(e.target.textContent );
                setActiveBtn('created');
              }}
              className={`${
                activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Created
            </button>
            <button
              type='button'
              onClick={(e) => {
                // setText(e.target.value);
                setActiveBtn('saved');
              }}
              className={`${
                activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Saved
            </button>
          </div>
          {pins?.length ? (
            <div className='px-2'>
              <MasonryLayout pins={pins} />
            </div>
          ) : (
            <div className='flex justify-center font-bold items-center w-full text-xl mt-2'>
              No Pins found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
