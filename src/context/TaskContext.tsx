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
/**
 * ype '{ task: {}; setTask: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ task: {}; setUser: () => void; }'.   Object literal may only specify known properties, and 'setTask' does not exist in type '{ task: {}; setUser: () => void; }'.
 *
 * / setTask nie umiem tego otypować....
 */


