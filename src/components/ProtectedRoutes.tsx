import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  loggedIn: any;
  children: any;
}

export const ProtectedRoutes = ({ loggedIn, children }: Props) => {
  if (!loggedIn) {
    return <Navigate to="/user/login" replace />;
  }
  return children;
};
