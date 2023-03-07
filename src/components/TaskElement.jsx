import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../apiCalls/task.calls';

export const TaskElement = ({ prevTask }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const response = await deleteTask(prevTask._id);
      if (response.status === 200) {
        alert(response.data.message);
        window.location.reload();
        // navigate('/user/profile'); // i must decide what is better
      } else {
        alert(response.response.data.msg);
      }
    }
  };

  return (
    <tr>
      <td className="border px-4 py-2">{prevTask.title}</td>
      <td className="border px-4 py-2">{prevTask.description}</td>
      <td className="border px-4 py-2">
        {prevTask.completed ? 'Completed' : 'Not yet...'}
      </td>
      <td className="border px-4 py-2">
        <button
          onClick={() => navigate(`/todo/view/${prevTask._id}`)}
          className="bg-blue-700 text-white px-2 rounded"
        >
          View
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          onClick={() => navigate(`/todo/update/${prevTask._id}`)}
          className="bg-green-600 text-white px-2 rounded"
        >
          Update
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
/**delete works, but it doesnt refresh page, and it throws error in console unauthorized, check and try to figure it out and fix */
