import axios from 'axios';
import {IUpdatePass, IUpdateUser, IUser} from "../types/userType";

export const register = async (user: IUser) => {
  try {
    const res = await axios.post('/api/users/register', user);
    return res;
  } catch (err: any) {
    return err;
  }
};

export const login = async (user: IUpdatePass) => {
// export const login = async (user: IUser) => {
  try {
    const res = await axios.post('/api/users/login', user);
    return res;
  } catch (err: any) {
    return err;
  }
};

export const logout = async () => {
  try {
    const res = await axios.get('/api/users/logout');
    return res;
  } catch (err: any) {
    return err;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get('/api/users/me');
    return res;
  } catch (err: any) {
    return err;
  }
};

export const updateUser = async (user: IUpdateUser) => {
  try {
    const res = await axios.put('/api/users/updatedetails', user);
    return res;
  } catch (err: any) {
    return err;
  }
};

export const updatePassword = async (data: IUpdatePass) => {
// export const updatePassword = async (data: IUser) => {
  try {
    const res = await axios.put('/api/users/updatepassword', data);
    return res;
  } catch (err: any) {
    return err;
  }
};

export const deleteUser = async () => {
  try {
    const res = await axios.delete('/api/users/delete');
    return res;
  } catch (err: any) {
    return err;
  }
};
