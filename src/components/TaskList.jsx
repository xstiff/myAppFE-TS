import React, { useContext, useEffect } from 'react';
import { getTasks } from '../apiCalls/task.calls';
import { TaskContext } from '../context/TaskContext';
import { TaskElement } from './TaskElement';

export const TaskList = () => {
  const { task, setTask } = useContext(TaskContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks();
      if (response.status === 200) {
        setTask(response.data.todos);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  }, []);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Completed</th>
          <th className="border px-4 py-2">View</th>
          <th className="border px-4 py-2">Update</th>
          <th className="border px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {task.length > 0 &&
          task.map((prevTask) => {
            return <TaskElement key={prevTask._id} prevTask={prevTask} />;
          })}
      </tbody>
    </table>
  );
};
