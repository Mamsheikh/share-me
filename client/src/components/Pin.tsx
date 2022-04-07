import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { Post, useSavePostMutation } from '../generated/graphql';
import { User } from '../container/Home';

interface Props {
  pin: Post;
  user: User;
  className: string;
}

export const Pin: React.FC<Props> = ({ pin, className, user }) => {
  const navigate = useNavigate();
  const [savePost, { loading }] = useSavePostMutation({
    onCompleted: (data) => {
      window.location.reload();
    },
  });
  const [postHovered, setPostHovered] = useState(false);
  const alreadySaved = !!pin?.save.filter((item) => item.user?.id === user.id)
    ?.length;
  const toggleSave = async (postId: string, userId: string) => {
    await savePost({
      variables: {
        postId,
        userId,
      },
    });
  };
  // console.log('alreasySaved', );
  return (
    <div className='m-2'>
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin/${pin.id}`)}
        className='relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out'
      >
        <img className='rounded-lg w-full' src={pin?.image} alt='' />
        {postHovered && (
          <div
            className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pt-2 pr-2 pb-2 z-index-50'
            style={{ height: '100%' }}
          >
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <a
                  href={`${pin.image}?dl=`}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'
                >
                  <MdDownloadForOffline />
                </a>
              </div>
              {alreadySaved ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(pin.id, user.id);
                  }}
                  type='button'
                  className='bg-red-500 opacity-70 hover:opacity-100 text-white px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'
                >
                  {pin?.save.length} Saved
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(pin.id, user.id);
                  }}
                  className='bg-red-500 opacity-70 hover:opacity-100 text-white px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'
                >
                  {loading ? <span>Saving...</span> : <span>Save</span>}
                </button>
              )}
            </div>
            <div className='flex justify-between items-center gap-2 w-full'>
              {pin.destination && (
                <a
                  href={pin.destination}
                  target='_blank'
                  rel='noreferrer'
                  className='bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md'
                >
                  <BsFillArrowUpRightCircleFill />
                  {pin.destination.length > 15
                    ? `${pin.destination.slice(0, 15)}...`
                    : pin.destination}
                </a>
              )}
              {pin.user.id === user.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // toggleSave(pin.id, user.id);
                  }}
                  type='button'
                  className='bg-white p-2 opacity-70 hover:opacity-100 text-black   text-base rounded-3xl hover:shadow-md outline-none'
                >
                  <AiTwotoneDelete />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Link
        to={`user-profile/${pin?.user?.id}`}
        className='flex gap-2 mt-2 items-center'
      >
        <img
          className='w-8 h-8 objet-cover rounded-full'
          src={pin?.user?.image}
          alt='user'
        />
        <p className='font-semibold capitalize'>{pin?.user?.name}</p>
      </Link>
    </div>
  );
};
