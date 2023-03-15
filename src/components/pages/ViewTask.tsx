import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTask } from '../../apiCalls/task.calls';
import {ITodo} from "../../types/todoType";

interface ViewTaskProps {
  todo: ITodo
}


export const ViewTask = (props: any) => {
  const [todo, setTodo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTask(String(id));
      /** id nadal jako string lub undefined, ale błedu nie ma. zobaczymy czy odpali zawsze można zmienić na any w getTasku*/


      if (response.status === 200) {
        setTodo(response.data.todo);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="text-center bg-white w-3/4 m-auto rounded py-3 mt-3">
      {todo && (
        <div>
          <h1 className="text-3xl mt-4 font-bold">Title: {props.todo.title}</h1>
          <h2 className="mt-3 text-2xl">
            Completed: {props.todo.completed ? 'Completed' : 'Not yet...'}
          </h2>
          <p className="mt-3">Description: {props.todo.description}</p>
          <p className="mt-3">Created: {props.todo.createdAt}</p>
          <p className="mt-3">Updated: {props.todo.updatedAt}</p>
        </div>
      )}
    </div>
  );
};
