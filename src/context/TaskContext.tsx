import React, { useState, createContext,ReactNode,Dispatch, SetStateAction } from 'react';
import { ITodo } from 'src/types/todoType';

interface IUserProps {
  children: ReactNode
}

interface ITaskContext {
  task: Array<ITodo> ,
  setTask: Dispatch<SetStateAction<any>>
}

export const TaskContext = createContext<ITaskContext>({ 
  task: [] as Array<ITodo> || {} as ITodo,
  setTask: () => {},
  });

export const TaskContextProvider = ({ children }: IUserProps) => {
  const [task, setTask] = useState<any>({});
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
/**
 * type '{ task: {}; setTask: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ task: {}; setUser: () => void; }'. Object literal may only specify known properties, and 'setTask' does not exist in type '{ task: {}; setUser: () => void; }'.
 *
 * / setTask nie rozumiem do końca....
 */


