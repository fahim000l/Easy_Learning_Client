import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const emailVerification = () => {
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    };
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
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoader(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loader,
        createUser,
        emailVerification,
        signIn,
        forgetPassword,
        setProfile,
        logOut,
        googleSignIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;