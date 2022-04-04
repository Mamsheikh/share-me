import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { gql, useMutation, useQuery } from '@apollo/client';

const GOOGLE_LOGIN = gql`
  mutation GoogleLogin($tokenId: String!) {
    googleLogin(tokenId: $tokenId) {
      accessToken
      user {
        id
        image
        name
      }
    }
  }
`;

const REFRESH_AUTH = gql`
  mutation {
    refreshAuth {
      accessToken
      user {
        name
        id
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [googleLogin, { loading, error }] = useMutation(GOOGLE_LOGIN, {
    onCompleted: (data) => {
      navigate('/', { replace: true });
    },
  });
  // const [refreshAuth] = useMutation(REFRESH_AUTH);
  const responseGoogle = (response: any) => {
    googleLogin({
      variables: {
        tokenId: response.tokenId,
      },
    });
    console.log('tokenId', response.tokenId);
  };
  // console.log(refreshAuth);
  return (
    <div className='flex flex-col h-screen justify-start items-center'>
      <div className='relative w-full h-full'>
        <video
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
          typeof='video/mp4'
          loop
          src={shareVideo}
        />
        <div className='absolute flex items-center justify-center flex-col inset-0 bg-blackOverlay'>
          <div className='p-5'>
            <img width='130px' src={logo} alt='logo' />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
              render={(renderProps) => (
                <button
                  type='button'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className='bg-mainColor flex justify-center items-center p-3 cursor-pointer rounded-lg outline-none'
                >
                  <FcGoogle className='mr-4 h-5 w-5' />
                  Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              // cookiePolicy='single-host-origin'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
