export  interface IUser {
  _id: string;
  name: string;
  email: string;
  age: string;
  password: string;
  completed: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface TodoProps {
  todo: IUser;
}

export type ApiDataType = {
  message: string;
  status: string;
  //   todos: IUser[];
  user?: IUser;
};
