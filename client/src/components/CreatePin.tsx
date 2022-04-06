import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Spinner } from '../components';
import { categories } from '../utils/data';

import { User } from '../container/Home';
import { checkImage, imageUpload } from '../utils/imageUpload';
import { useCreatePinMutation } from '../generated/graphql';

interface Props {
  user: User;
}
export const CreatePin: React.FC<Props> = ({ user }) => {
  const [createPin, { loading: createPinLoading }] = useCreatePinMutation({
    onCompleted: (data) => {
      navigate('/');
    },
  });
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState('');
  const [fields, setFields] = useState(false);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState('');

  const navigate = useNavigate();

  const uploadImage = async (e) => {
    const err = checkImage(e.target.files[0]);

    if (err) {
      setWrongImageType(err);
    }
    setLoading(true);

    const { url } = await imageUpload(e.target.files[0]);
    setImageAsset(url);
    setLoading(false);
  };

  const savePin = async () => {
    if (title && about && destination && imageAsset && category) {
      await createPin({
        variables: {
          input: {
            about,
            title,
            destination,
            category,
            image: imageAsset,
          },
        },
      });
    } else {
      setFields(true);

      setTimeout(() => setFields(false), 2000);
    }
  };
  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      {fields && (
        <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>
          Please fill in all the fields
        </p>
      )}
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3  w-full'>
        <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
          <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
            {loading && <Spinner />}
            {wrongImageType && <p>Wrong image type</p>}
            {!imageAsset ? (
              <label className='cursor-pointer'>
                <div className='flex flex-col items-center justify-center h-full'>
                  <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>
                      <AiOutlineCloudUpload className='' />
                    </p>
                    <p className='text-lg'>Click to Upload</p>
                  </div>
                  <p className='mt-32 text-gray-4'>
                    Use high-quality JPG, SVG, PNG, or GIF less than 20MB
                  </p>
                </div>
                <input
                  type='file'
                  name='upload-image'
                  onChange={uploadImage}
                  className='w-0 h-0'
                />
              </label>
            ) : (
              <div className='relative h-full'>
                <img
                  src={imageAsset}
                  alt='uploaded pic'
                  className='w-full h-full object-cover'
                />
                <button
                  type='button'
                  onClick={() => setImageAsset(null)}
                  className='absolute bottom-3  right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                >
                  <MdDelete className='' />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add your title'
            className='outline-none text-2xl sm:text-3xl font-bold  border-b-2 border-gray-200 p-2'
          />
          {user && (
            <div className='flex gap-2 my-2 items-center bg-white rounded-lg'>
              <img
                src={user.image}
                alt='user'
                className='h-10 w-10 rounded-full'
              />
              <p className='font-bold'>{user.name}</p>
            </div>
          )}
          <input
            type='text'
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder='What is your Pin about'
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <input
            type='text'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder='Add a destination link'
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <div className='flex flex-col'>
            <div>
              <p className='mb-2 text-lg font-semibold sm:text-xl'>
                choose Pin category
              </p>
              <select
                name=''
                onChange={(e) => setCategory(e.target.value)}
                className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
              >
                <option value='other' className='bg-white'>
                  Select category
                </option>

                {categories.map((category) => (
                  <option
                    className='bg-white text-black capitalize text-base border-0 outline-none'
                    value={category.name}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end items-end mt-5'>
              <button
                type='button'
                onClick={savePin}
                className='bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none'
              >
                {createPinLoading ? 'Creating...' : 'Save Pin'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
