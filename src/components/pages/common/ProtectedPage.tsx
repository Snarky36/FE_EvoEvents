import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedPage = ({ children }) => {
  const { isUserLoggedIn } = useContext(UserContext);

  return isUserLoggedIn ? children : <Navigate to='/' replace />;
};
