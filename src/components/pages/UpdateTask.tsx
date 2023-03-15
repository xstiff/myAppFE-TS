import React, {ChangeEvent, FormEventHandler, useContext, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {updateTask} from '../../apiCalls/task.calls';
import {TaskContext} from '../../context/TaskContext';
import {ITodo, IUpdateTask} from "../../types/todoType";

interface UpdateTaskProps {
    todo: ITodo
}

export const UpdateTask = (props: any) => {

    /**  Property 'setTask' does not exist on type '{ task: {}; setUser: () => void; }'.*/
    const {task, setTask} = useContext(TaskContext);
    const {id}  = useParams();
    const myTodo = task.find((todo: ITodo) => todo._id === id);
    const [title, setTitle] = useState(myTodo?.title);
    const [description, setDescription] = useState(myTodo?.description);
    const [completed, setCompleted] = useState<boolean>(myTodo?.completed as boolean);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {title, description, completed};
        const response = await updateTask(String(id), data as IUpdateTask );

        /** id nadal jako string lub undefined, ale błedu nie ma. zobaczymy czy odpali zawsze można zmienić na any
         * zmieniony typ w task calls.
         * */
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
              // cols="30"
              cols={30}
              // rows='5'
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          ></textarea>
                </div>
                <div className="mb-3">
                    <select
                        value={completed ? 'true' : 'false' }
                        onChange={(e): any => setCompleted(e.target.value === 'true' ? true : false )}
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
