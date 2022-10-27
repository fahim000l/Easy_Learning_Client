import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // const emailVerification = () => {
    //     setLoader(true);
    //     return sendEmailVerification(auth.currentUser);
    // };
    const setProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    };
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    const forgetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    };
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    };
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    };
    const gitSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, gitProvider);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoader(false);
            setUser(currentUser);

        });

        return () => {
            unsubscribe();
        }
    }, [user]);

    const authInfo = {
        user,
        loader,
        createUser,
        // emailVerification,
        signIn,
        forgetPassword,
        setProfile,
        logOut,
        googleSignIn,
        gitSignIn,
        setUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;