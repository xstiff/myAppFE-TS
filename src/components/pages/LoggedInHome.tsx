import React from 'react';
import { TaskList } from '../TaskList';

export const LoggedInHome = () => {
  return (
    <div className="w-5/6 m-auto text-center">
      <h1 className="text-center text-3xl mb-4">View Task</h1>
      <TaskList />
    </div>
  );
};
