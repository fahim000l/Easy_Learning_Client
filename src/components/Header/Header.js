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
    user && console.log(user);
    return (
        <div className={`navbar p-2 ${mode ? 'bg-gradient-to-r from-sky-500 to-indigo-500' : 'bg-gradient-to-r from-black to-gray-500'}`}>
            <div className="flex-1">
                <NavLink className="text-5xl font-bold"><img className='lg:w-[150px] lg:h-[100px] w-[100px] h-[100px]' src={logo} alt="" /></NavLink>
            </div>
            {
                user?.uid &&
                <div>
                    {
                        user?.photoURL ?
                            <img title={`${user.displayName}`} className='w-[60px] h-[60px] rounded-full' src={user.photoURL} alt="" />
                            :
                            <FaUserAlt title={`${user.displayName}`} className={`w-[60px] h-[60px] rounded-full border-[5px] border-solid p-1 ${mode ? 'border-black text-black' : 'border-white text-white'}`} ></FaUserAlt>
                    }
                </div>
            }
            <div onClick={() => setMenu(!menu)} className="ml-[100px]">
                <FaBars className='text-white font-bold text-3xl lg:hidden block'></FaBars>
            </div>
            <div className={`lg:static rounded-lg w-full lg:w-[50%] duration-500 ease-in  ${mode ? 'bg-blue-500' : 'bg-gray-500'} lg:bg-transparent absolute right-0 text-3xl font-bold text-white text-start flex flex-col lg:flex-row lg:items-center justify-evenly ${menu ? 'top-[110px]' : 'top-[-10000000000000px]'}`}>
                <NavLink onClick={() => setMenu(false)} to={'/'} className={`mx-5 px-5 py-2 font-bold text-xl lg:btn ${mode ? 'lg:btn-primary' : 'lg:bg-black'} rounded-lg`}>Home</NavLink>
                <NavLink onClick={() => setMenu(false)} to={'/faqs'} className={`mx-5 px-5 py-2 font-bold text-xl lg:btn ${mode ? 'lg:btn-primary' : 'lg:bg-black'} rounded-lg`}>FAQ</NavLink>
                <NavLink onClick={() => setMenu(false)} to={'/course_category'} className={`mx-5 px-5 py-2 font-bold text-xl lg:btn ${mode ? 'lg:btn-primary' : 'lg:bg-black'} rounded-lg`}>Courses</NavLink>
                <NavLink onClick={() => setMenu(false)} to={'/blog'} className={`mx-5 px-5 py-2 font-bold text-xl lg:btn ${mode ? 'lg:btn-primary' : 'lg:bg-black'} rounded-lg`}>Blog</NavLink>
                {
                    user?.uid ?
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