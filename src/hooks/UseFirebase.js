import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Sign in and login with Google provider
    const signInUsingGoogle = () => {

        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }
    // Create Account with email and password / register
    const createAccountWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // Update User Name 
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            window.location.reload();
            // const newUser = { ...user, displayName: name } 
            // setUser(newUser)
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    // Login with email and password / Login
    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log out and Sign signOut
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        user,
        signInUsingGoogle,
        createAccountWithEmailPass,
        updateName,
        loginWithEmailAndPass,
        logOut,
        isLoading
    }

}
export default useFirebase;