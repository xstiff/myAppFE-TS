import {IUser} from "./userType";

export interface ITodo {
  id: string;
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId;
  //     ref: 'User';
  //     required: true;
  //   };
  user: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoProps {
  todo: ITodo;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
export type ICreateTask = {
  title: string;
  description: string;
}
export type  IUpdateTask = Omit<ITodo, 'id' | '_id' |'user'>
