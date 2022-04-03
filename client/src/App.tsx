import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './container/Home';
import { useMeQuery } from './generated/graphql';
import Login from './pages/Login';

const ME_QUERY = gql`
  query ME {
    me {
      id
      name
      image
      email
    }
  }
`;

function App() {
  const { data, loading } = useMeQuery();
  if (loading) return <div>Loading....</div>;
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<Home user={data.me} />} />
    </Routes>
  );
}

export default App;
