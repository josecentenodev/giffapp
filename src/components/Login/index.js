import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import useUser from "hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {error, logUser, isLogged, loginUserGoogle} = useUser()
    const [,navigate] = useLocation()

    useEffect(() => {
      if(isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit =  (e) => {
        e.preventDefault();
        // alert(`${username}, ${password}`)
        // navigate('/')
        logUser(username, password)
    };

    const handleGoogleLogin = () => {
        loginUserGoogle()
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-14 justify-center w-64'>
            <input
                type='email'
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className='p-1 outline-none rounded-t-sm my-3 w-full'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="El formato no es el indicado"
                required
            />
            <input
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='p-1 outline-none rounded-b-sm mt-3 w-full'
                minlength="8"
            />
            <button className="bg-green-400 p-1 rounded mt-5 w-full">Login</button>
            {error && <p className="text-red-500 p-2">{error}</p>}
            <p className="text-green-400 mt-1">Don't have an account?</p>
            <Link to="/register" className="underline text-green-400">Sign up here.</Link>
            <p className="text-green-400 mt-2 text-xs"> Or login with <button onClick={handleGoogleLogin}>Google</button></p>
        </form>
        </>
    );
}
