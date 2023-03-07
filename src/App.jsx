import React, { useEffect, useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Register';
import { Profile } from './components/pages/Profile';
import { Login } from './components/pages/Login';
import { UserContext } from './context/UserContext';
import { getUser } from './apiCalls/user.calls';
import { LoggedInHome } from './components/pages/LoggedInHome';
import { NotProtectedRoutes } from './components/NotProtectedRoutes';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { AddTask } from './components/pages/AddTask';
import { UpdateProfile } from './components/pages/UpdateProfile';
import { UpdatePassword } from './components/pages/UpdatePassword';
import { ViewTask } from './components/pages/ViewTask';
import { UpdateTask } from './components/pages/UpdateTask';
import { Footer } from './components/Footer';

export const App = () => {
  const { user, setUser } = useContext(UserContext);

  //avoid to reset logged in user data after page is refreshed
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUser();
      setUser(res.data.user);
    };
    fetchData();
  }, []);

  return (
    <div className="App bg-gradient-to-r from-cyan-400 via-purple-700 to-red-700 ">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user._id ? <LoggedInHome /> : <Home />} />
        <Route
          path="/user/register"
          element={
            <NotProtectedRoutes loggedIn={user._id ? true : false}>
              <Register />
            </NotProtectedRoutes>
          }
        />
        <Route
          path="/user/login"
          element={
            <NotProtectedRoutes loggedIn={user._id ? true : false}>
              <Login />
            </NotProtectedRoutes>
          }
        />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/todo/create"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <AddTask />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user/update"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <UpdateProfile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user/updatepassword"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <UpdatePassword />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/todo/view/:id"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <ViewTask />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/todo/update/:id"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <UpdateTask />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
