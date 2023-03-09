import React, {useState, createContext} from 'react';
import {IUser} from '../types/userType'

interface IUserProps {
    user: IUser,
    children: any
}

export const UserContext = createContext({
    user: {}, setUser: () => {
    }
});

export const UserContextProvider = ({children}: IUserProps) => {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
// setUser nie umiem tego otypować....
