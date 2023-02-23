import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passVerify, setPassVerify] = useState("");
    const { error, signUpUser, isLogged } = useUser();
    const [errorVerify, setErrorVerify] = useState(null);
    const [, navigate] = useLocation();

    useEffect(() => {
        if (isLogged) navigate("/");
    }, [isLogged, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorVerify(null)
        // alert(`${username}, ${password}`)
        // navigate('/')
        if (password !== passVerify) {
            setErrorVerify("Passwords do not match");
            return;
        }
        signUpUser(username, password);
    };

    return (
        <div className='w-full flex justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center mt-14 justify-center w-64'
            >
                <input
                    type='email'
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className='p-1 outline-none rounded-t-sm my-3 w-full'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='p-1 outline-none rounded-b-sm mt-3 w-full'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                />
                <input
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassVerify(e.target.value)}
                    value={passVerify}
                    className='p-1 outline-none rounded-b-sm mt-3 w-full'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'
                />
                {errorVerify && <p className='text-red-500 p-2'>{errorVerify}</p>}
                <button className='bg-green-400 p-1 rounded mt-5 w-full'>
                    Sign up
                </button>
                {error && <p className='text-red-500 p-2'>{error}</p>}
            </form>
            </div>
    );
}
