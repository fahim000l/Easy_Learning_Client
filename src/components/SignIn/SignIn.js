import React from 'react';
import { NavLink } from 'react-router-dom';
import googleIcon from '../../media/google.png';
import gitIcon from '../../media/github-octocat-logo-vector-png--896-removebg-preview.png'

const SignIn = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center pb-5'>
            <div className='border-[5px] bg-blue-200 rounded-lg w-[90%] text-start border-solid border-blue-900 lg:w-[30%] mx-auto mb-5 mt-[60%] lg:mt-[2%] lg:px-[55px] px-5 py-[37px]'>
                <h1 className='text-5xl text-blue-900 font-bold'>Sign In</h1>
                <form>
                    <div className='mt-[53.97px]'>
                        <label className='block font-bold text-blue-900' htmlFor="email">Email</label>
                        <input className='px-3 py-2 w-full rounded-lg border-b-[5px] border-solid border-blue-900' type="email" name="email" id="" />
                    </div>
                    <div className='mt-[50px]'>
                        <label className='block font-bold text-blue-900' htmlFor="password">Password</label>
                        <input className='px-3 py-2 w-full rounded-lg border-b-[5px] border-solid border-blue-900' type="password" name="password" id="" />
                    </div>
                    <div className='mt-[20px]'>
                        <p className='text-red-500 font-bold'>
                            {/* {error} */}
                        </p>
                    </div>
                    <div className='mt-[20px] font-bold text-xl'>
                        <button className='bg-blue-900 w-full text-white px-5 py-2' type="submit">Sign In</button>
                    </div>
                </form>
                <p className='text-black mt-[20px] font-bold'>
                    Forgot Password ? <button className={'text-blue-900'}>Reset</button>
                </p>
                <p className='mt-5 font-bold text-xl'>
                    doesn't have an account ? <NavLink className={'text-blue-900'} to={'/signup'}>Sign Up</NavLink>
                </p>
            </div>
            <div className='flex items-center w-[90%] lg:w-[25%] mt-[10px]'>
                <hr className='border-[3px] rounded-lg border-solid border-blue-900 w-full' />
                <p className='mx-[5px] text-xl font-bold'>Or</p>
                <hr className='border-[3px] rounded-lg border-solid border-blue-900 w-full' />
            </div>
            <div className='lg:w-[30%] w-[90%]'>
                <div className='cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[5px] bg-blue-200 text-blue-900 border-solid border-blue-900'>
                    <img className='w-[37px] h-[37px]' src={gitIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with GitHub</p>
                </div>
                <div className='cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[5px] bg-blue-200 text-blue-900 border-solid border-blue-900'>
                    <img className='w-[37px] h-[37px]' src={googleIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;