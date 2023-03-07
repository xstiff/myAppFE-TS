import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../apiCalls/user.calls';
import { UserContext } from '../../context/UserContext';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('Password does not match!');
      return;
    }
    const data = { name, email, age, password };
    const response = await register(data);
    if (response.status === 201) {
      alert('User successfully registered.');
      setUser(response.data.user);
      navigate('/');
    } else {
      alert(response.response.data.msg);
    }
  };

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="insert your nickname..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            type="number"
            placeholder="insert age..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
        <div className="mb-3">
          <input
            type="password"
            placeholder="confirm password..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-black text-white w-full py-2">
          Register
        </button>
      </form>
    </div>
  );
};
