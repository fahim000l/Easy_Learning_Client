import React from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
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

    const authInfo = {
        user,
        createUser,
        emailVerification
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;