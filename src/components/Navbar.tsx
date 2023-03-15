import React from 'react';
import {Link} from 'react-router-dom';
import { IUser } from 'src/types/userType';

interface NavbarProps {
    user: IUser
}

export const Navbar = ({user}: NavbarProps) => {

    return (
        <nav className="bg-black py-3 text-white flex items-center justify-between  ">
            <h1 className="ml-1 font-bold text-2xl">
                Things I want to do before I die
            </h1>
            <ul className="flex">
                {user && (
                    <>
                        <li className="mr-3">
                            <Link className="hover:text-pink-500" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="hover:text-pink-500" to="/todo/create">
                                Add task
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="hover:text-pink-500" to="user/profile">
                                Profile
                            </Link>
                        </li>
                    </>
                )}
                {!user && (
                    <>
                        <li className="mr-3">
                            <Link className="hover:text-pink-500" to="user/register">
                                Register
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="hover:text-pink-500" to="user/login">
                                Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};
