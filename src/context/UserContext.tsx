import React, {useState, createContext, ReactNode, Dispatch, SetStateAction} from 'react';
import {IUser} from '../types/userType'

interface IUserProps {
    user: IUser,
    children: ReactNode
}

interface IUserContext {
    user: IUser,
    setUser: Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<IUserContext>({
    user: {} as IUser,
    setUser: () => {}
});

export const UserContextProvider = ({user, children}: IUserProps) => {
    const [currentUser, setCurrentUser] = useState<IUser>(user);
    const setUser = (user: IUser) => setCurrentUser(user);
    return (
        <UserContext.Provider value={{user: currentUser, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
