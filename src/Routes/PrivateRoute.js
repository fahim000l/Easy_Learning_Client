import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <h1 className='text-3xl lg:text-5xl mt-[5%]'>Loading...</h1>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/signin'} state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;