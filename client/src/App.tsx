import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Spinner } from './components';
import Home from './container/Home';
import { useMeQuery } from './generated/graphql';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();
  const { data, loading } = useMeQuery();

  useEffect(() => {
    if (!data?.me) {
      navigate('/login');
    }
  }, [data?.me, navigate]);
  if (loading)
    return (
      <div className='h-screen flex items-center justify-center'>
        <Spinner message='Launching ShareMe' />;
      </div>
    );
  return (
    <Routes>
      <Route path='/login' element={<Login user={data?.me} />} />
      <Route path='/*' element={<Home user={data?.me} />} />
    </Routes>
  );
}

export default App;
