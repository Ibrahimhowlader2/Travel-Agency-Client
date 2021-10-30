import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            
            .finally(()=> setIsLoading(false))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(()=> setIsLoading(false))
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, user =>{
            if (user) {
               setUser(user)
              }
              else{
                setUser({})
              }
              setIsLoading(false);
        });
        return () => unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }

}
export default useFirebase;