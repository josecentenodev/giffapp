import { useContext, useCallback, useState } from "react";
import Context from "context/UserContext";

export default function useUser() {
    const { user, setUser, signup, login, logout, loginWithGoogle } = useContext(Context);
    const [error, setError] = useState(null)

    const loginUserGoogle = useCallback(() => {
        loginWithGoogle().then((userCredential) => {
            // Signed in 
            setUser(userCredential.user)
            // ...
          }).catch((er)=>{
            setError(`${er.message}`)
          })
    }, [loginWithGoogle, setUser]);

    const logUser = useCallback((username, password) => {
        login(username, password).then((userCredential) => {
            // Signed in 
            setUser(userCredential.user)
            // ...
          })
          .catch((er) => {
            if (er.message === 'Firebase: Error (auth/user-not-found).') {
                setError('User not found')
            } else if (er.message === 'Firebase: Error (auth/wrong-password).') {
                setError('Wrong Password')
            }
            return error
          });
    }, [setUser, error, login]);


    const signUpUser = useCallback((username, password) => {
        signup(username, password).then((userCredential) => {
            // Signed in 
            setUser(userCredential.user)
            // ...
          })
          .catch((er) => {
            if (er.message === 'Firebase: Error (auth/email-already-in-use).')
            setError('User already exists')
            return error
          });
    }, [setUser, error, signup])

    const logOutUser = useCallback(() => {
        logout()
        setUser(null)
    }, [setUser, logout]);

    return { isLogged: Boolean(user), logUser, logOutUser, signUpUser, error, user, loginUserGoogle };
}
