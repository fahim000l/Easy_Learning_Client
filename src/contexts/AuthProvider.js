import React from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Faahim' };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth.currentUser, email);
    }

    const authInfo = {
        user,
        createUser,
        emailVerification,
        signIn,
        forgetPassword
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;