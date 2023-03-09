import React, { useState, createContext } from 'react';

interface IUserProps {
  children: any
}

export const TaskContext = createContext({ task: {}, setUser: () => {} });

export const TaskContextProvider = ({ children }: IUserProps) => {
  const [task, setTask] = useState({});
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
// setTask nie umiem tego otypować....
