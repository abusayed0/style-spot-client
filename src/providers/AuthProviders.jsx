import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../firebase/initailize-firebase-authentication";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const emailPassLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };
    const update = (data) => {
        return updateProfile(auth.currentUser, data);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user inside auth state", currentUser);
            setIsLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);
    const contextValue = {user, createUser, update, emailPassLogin, googleLogIn, logOut, isLoading};
    return (
        <AuthContext.Provider value={contextValue}>
                {children }
        </AuthContext.Provider>
    );
};
AuthProviders.propTypes = {
    children: PropTypes.element.isRequired
};
export default AuthProviders;