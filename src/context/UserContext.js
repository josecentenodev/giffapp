import React, { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {auth} from "../firebase"

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth).then(()=>{console.log('user has signed out')})
    return (
        <Context.Provider value={{ user, setUser, signup, login, logout, loginWithGoogle }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
