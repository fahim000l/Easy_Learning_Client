import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/easy_learning_logo-removebg-preview.png';
import { FaBars, FaSignOutAlt, FaSignInAlt, FaUserAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { UtilityContext } from '../../contexts/UtilityProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { mode, setMode } = useContext(UtilityContext);
    const [menu, setMenu] = useState(false);
    return (
        <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500 p-2">
            <div className="flex-1">
                <NavLink className="text-5xl font-bold"><img className='lg:w-[150px] lg:h-[100px] w-[100px] h-[100px]' src={logo} alt="" /></NavLink>
            </div>
            {
                user && user.uid &&
                <div>
                    {
                        user && user.uid && user.photoURL ?
                            <img className='lg:w-[60px] w-[30px] h-[30px] lg:h-[60px] rounded-full' src={user.photoURL} alt="" />
                            :
                            <FaUserAlt className='lg:w-[60px] w-[30px] h-[30px] lg:h-[60px] rounded-full text-white' ></FaUserAlt>
                    }
                </div>
            }
            <div onClick={() => setMenu(!menu)} className="ml-[100px]">
                <FaBars className='text-white font-bold text-3xl lg:hidden block'></FaBars>
            </div>
            <div className={`lg:static rounded-lg w-full lg:w-[50%] duration-500 ease-in  bg-blue-500 lg:bg-transparent absolute right-0 text-3xl font-bold text-white text-start flex flex-col lg:flex-row lg:items-center justify-evenly ${menu ? 'top-[110px]' : 'top-[-10000000000000px]'}`}>
                <NavLink onClick={() => setMenu(false)} to={'/'} className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-primary rounded-lg'}>Home</NavLink>
                <NavLink onClick={() => setMenu(false)} className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-primary rounded-lg'}>FAQ</NavLink>
                <NavLink onClick={() => setMenu(false)} to={'/course_category'} className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-primary rounded-lg'}>Courses</NavLink>
                <NavLink onClick={() => setMenu(false)} to={'/blog'} className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-primary rounded-lg'}>Blog</NavLink>
                {
                    user && user.uid ?
                        <button onClick={() => {
                            setMenu(false);
                            logOut();
                        }
                        } className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-dark rounded-lg'}>Sign Out <FaSignOutAlt className='ml-5' /></button>
                        :
                        <NavLink onClick={() => setMenu(false)} to={'/signin'} className={'mx-5 px-5 py-2 font-bold text-xl lg:btn lg:btn-success rounded-lg'}>Sign In <FaSignInAlt className='ml-5' /></NavLink>

                }
                <div onClick={() => setMode(!mode)} className="cursor-pointer">
                    {
                        mode ?
                            <FaToggleOn />
                            :
                            <FaToggleOff />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;