import { Navigate } from 'react-router-dom';

export const NotProtectedRoutes = ({ loggedIn, children }) => {
  if (loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
