import { Navigate } from 'react-router-dom';

interface Props {
  loggedIn: any,
  children: any
}

export const NotProtectedRoutes = ({ loggedIn, children }: Props) => {
  if (loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
