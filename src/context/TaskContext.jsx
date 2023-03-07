import React, { useState, createContext } from 'react';

export const TaskContext = createContext({ task: {}, setUser: () => {} });

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState({});
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
