import React, { useState, useEffect } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '../components';
import { User } from '../container/Home';
import {
  useAddCommentMutation,
  useGetPinLazyQuery,
  useMoreLazyQuery,
} from '../generated/graphql';

interface Props {
  user: User;
}
export const PinDetail: React.FC<Props> = () => {
  const [addComment, { loading: addCommentLoading }] = useAddCommentMutation({
    onCompleted: (data) => {
      setComment('');
      window.location.reload();
    },
  });
  const [getPin, { loading, data }] = useGetPinLazyQuery({
    onCompleted: (data) => {
      setPinDetails(data.getPin);
      setCategory(data.getPin?.category.name);
    },
  });
  const [more, { data: moreData, loading: moreLoading }] = useMoreLazyQuery();
  const [pinDetails, setPinDetails] = useState(null);
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const { pinId } = useParams();
  // if (category) {
  //   more({
  //     variables: {
  //       category,
  //     },
  //   });
  // }
  useEffect(() => {
    getPin({
      variables: {
        postId: pinId,
      },
    });
  }, [pinId]);
  useEffect(() => {
    if (category) {
      more({
        variables: {
          category,
          postId: pinId,
        },
      });
    }
  }, [category]);
  if (loading) return <Spinner message='Loading Pin...' />;
  console.log('moreData', moreData?.more);
  const handleAddcomment = async () => {
    await addComment({
      variables: {
        content: comment,
        postId: pinId,
      },
    });
  };
  return (
    <>
      <div
        className='flex xl-flex-row flex-col m-auto bg-white'
        style={{ maxWidth: '1500px', borderRadius: '32px' }}
      >
        <div className='flex justify-center items-center md:items-start flex-initial'>
          <img
            src={data?.getPin?.image}
            alt='pinDetail'
            className='rounded-t-3xl rounded-b-lg'
          />
        </div>
        <div className='w-full p-5 flex-1 xl:min-w-620'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <a
                onClick={(e) => e.stopPropagation()}
                href={`${data?.getPin?.image}?dl=`}
                download
              >
                <MdDownloadForOffline />
              </a>
            </div>
            <a
              href={data?.getPin?.destination}
              target='_blank'
              rel='noreferrer'
            >
              {data?.getPin?.destination}
            </a>
          </div>
          <div>
            <h1 className='text-4xl font-bold break-words mt-3'>
              {data?.getPin.title}
            </h1>
            <p className='mt-3'>{data?.getPin.about}</p>
          </div>
          <Link
            to={`/user-profile/${data?.getPin?.user?.id}`}
            className='flex gap-2 mt-5 items-center bg-white rounded-lg'
          >
            <img
              className='w-8 h-8 objet-cover rounded-full'
              src={data?.getPin?.user?.image}
              alt='user'
            />
            <p className='font-semibold capitalize'>
              {data?.getPin?.user?.name}
            </p>
          </Link>
          <h2 className='mt-5 text-2xl'>Comments</h2>
          <div className='max-h-370 overflow-y-auto'>
            {data?.getPin.comments.map((comment, index) => (
              <div
                className='flex gap-2 mt-5 items-center bg-white rounded-lg'
                key={index}
              >
                <img
                  src={comment?.user?.image}
                  alt='user-profile'
                  className='h-10 w-10 rounded-full'
                />
                <div className='flex flex-col'>
                  <p className='font-bold'>{comment?.user?.name}</p>
                  <p>{comment?.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap mt-6 gap-3'>
            <Link to={`/user-profile/${data?.getPin?.user?.id}`} className=''>
              <img
                className='w-10 h-12 cursor-pointer objet-cover rounded-full'
                src={data?.getPin?.user?.image}
                alt='user'
              />
            </Link>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Add a Comment'
              type='text'
              className='flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300'
            />
            <button
              onClick={handleAddcomment}
              type='button'
              className='bg-red-500 text-white rounded-full px-6 py-2 font-semibold outline-none text-base'
            >
              {addCommentLoading ? 'Adding comment...' : 'Add Comment'}
            </button>
          </div>
        </div>
      </div>
      {moreData?.more ? (
        <>
          <h2 className='text-center font-bold text-2xl mt-8 mb-4'>
            More like this
          </h2>
          <MasonryLayout pins={moreData?.more} />
        </>
      ) : (
        <h2>No more</h2>
      )}
    </>
  );
};
