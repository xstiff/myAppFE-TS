import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../apiCalls/task.calls';

export const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    const response = await createTask(data);
    if (response.status === 201) {
      alert('Task created');
      navigate('/');
    } else {
      alert(response.response.data.msg);
    }
  };

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3x1 my-3 font-bold">Add task</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="insert title..."
            className="focus:outline-none border-none p-2 rounded w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            placeholder="write something..."
            className="focus:outline-none border-none p-2 rounded w-full"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="bg-black text-white w-full py-2">
          Add
        </button>
      </form>
    </div>
  );
};
