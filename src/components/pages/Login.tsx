import React, { useState, useContext } from 'react';
import { login } from '../../apiCalls/user.calls.js';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

// data-nowy typ z user.calls/userTypes zobaczymy co bedzie jak odpale.
    const data = { email, password };
    const response = await login(data);
    if (response.status === 200) {
      alert('User logged in successfully.');
      setUser(response.data.user);
      /**Expected 0 arguments, but got 1. rozumiem błąd, nie rozumiem skąd pochodzi, z useContext? */
      navigate('/');
    } else {
      alert(response.response.data.msg);
    }
  };


  return (

    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="insert valid email..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="insert password..."
            className="focus:outline-none border-none p-2 rounded w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-black text-white w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
};
