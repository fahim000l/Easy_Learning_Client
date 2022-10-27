import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-between m-[auto] mt-[200px]'>
            <FaceFrownIcon className="lg:h-[500px] md:h-[500px] h-[200px] w-[200px] lg:w-[500px] md:w-[500px] text-center text-3xl font-bold" />
            <p className='lg:text-5xl md:text-5xl text-2xl font-bold'>
                Sorry!! The Page is not found <br />
                go back to <NavLink className='text-blue-900' to={'/home'}>home page.</NavLink>
            </p>
        </div>
    );
};

export default ErrorPage;

