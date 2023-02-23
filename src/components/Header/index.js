import React from "react";
import { Link } from "wouter";
import useUser from "hooks/useUser";

export default function Header() {
    const { isLogged, logOutUser } = useUser();

    const handleClick = (e) => {
        e.preventDefault();
        logOutUser()
    };

    return (
        <header className='flex justify-end text-green-400'>
            {isLogged ? (
                <button
                    className='p-5 mr-5 cursor-pointer hover:underline'
                    onClick={handleClick}
                >
                    Logout
                </button>
            ) : (
                <Link
                    className='p-5 mr-5 cursor-pointer hover:underline'
                    to='/login'
                >
                    Login
                </Link>
            )}
        </header>
    );
}
