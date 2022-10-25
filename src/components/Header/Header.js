import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/easy_learning_logo-removebg-preview.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500 p-2">
            <div className="flex-1">
                <NavLink className="text-5xl font-bold"><img className='lg:w-[150px] lg:h-[100px] w-[100px] h-[100px]' src={logo} alt="" /></NavLink>
            </div>
            <div onClick={() => setMenu(!menu)}>
                <FaBars className='text-white font-bold text-3xl lg:hidden block'></FaBars>
            </div>
            <div className={`lg:static rounded-lg w-full lg:w-[50%] duration-500 ease-in bg-blue-500 lg:bg-transparent absolute right-0 text-3xl font-bold text-white text-start flex flex-col lg:flex-row lg:items-center justify-evenly ${menu ? 'top-[110px]' : 'top-[-10000000000000px]'}`}>
                <NavLink to={'/'} className={'mx-5 px-5 py-2 font-bold text-xl  hover:bg-purple-800 lg:btn lg:btn-primary rounded-lg'}>Home</NavLink>
                <NavLink className={'mx-5 px-5 py-2 font-bold text-xl  hover:bg-purple-800 lg:btn lg:btn-primary rounded-lg'}>FAQ</NavLink>
                <NavLink to={'/course_category'} className={'mx-5 px-5 py-2 font-bold text-xl  hover:bg-purple-800 lg:btn lg:btn-primary rounded-lg'}>Courses</NavLink>
                <NavLink className={'mx-5 px-5 py-2 font-bold text-xl  hover:bg-purple-800 lg:btn lg:btn-primary rounded-lg'}>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;