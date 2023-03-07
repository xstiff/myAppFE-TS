import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from '../../apiCalls/task.calls';
import { TaskContext } from '../../context/TaskContext';

export const UpdateTask = () => {
  const { task, setTask } = useContext(TaskContext);
  const { id } = useParams();
  const myTodo = task.find((todo) => todo._id === id);
  const [title, setTitle] = useState(myTodo.title);
  const [description, setDescription] = useState(myTodo.description);
  const [completed, setCompleted] = useState(myTodo.completed);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description, completed };
    const response = await updateTask(id, data);
    if (response.status === 200) {
      alert('Successfully updated.');
      //   alert(response.response.data.msg);
      navigate('/');
    } else {
      alert(response.response.data.msg);
    }
  };

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Update task</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
            className="focus:outline-none border-none p-2 rounded w-full"
          >
            <option value="false">Not completed</option>
            <option value="true">Completed</option>
          </select>
        </div>
        <button type="submit" className="bg-black text-white w-full py-2">
          Update
        </button>
      </form>
    </div>
  );
};

/**textarea goes too wide when description is longer, and ruins styling.
 * if description is short it is all right UpdateTask
 */
