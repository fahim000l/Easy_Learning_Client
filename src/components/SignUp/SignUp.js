import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [accepted, setAccepted] = useState(true);
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='border-[5px] bg-blue-200 rounded-lg text-start border-solid border-blue-900 lg:w-[50%] w-[90%] mx-auto mb-5 mt-[60%] lg:mt-[5%] lg:px-[55px] px-5 py-[37px]'>
                <h1 className='text-5xl text-blue-900 font-bold'>Sign Up</h1>
                <form className='w-full'>
                    <div className='flex flex-col-reverse lg:flex-row justify-evenly w-full'>
                        <div className='lg:mx-5 mx-0 w-full'>
                            <div className='mt-[20px]'>
                                <label className='block font-bold text-blue-900' htmlFor="name">User Name</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="text" name="name" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className='block font-bold text-blue-900' htmlFor="photp">Photo URL</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="text" name="photoUrl" id="" />
                            </div>
                            <div className='mt-[20px]'>
                                <input type="checkbox" name="conditions" id="" />
                                <label className='mx-2 text-blue-900 font-bold' htmlFor="conditions">Accept terms & conditions</label>
                            </div>
                        </div>
                        <div className='lg:mx-5 mx-0 w-full'>
                            <div className='mt-[15px]'>
                                <label className='block font-bold text-blue-900' htmlFor="email">Email</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="email" name="email" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className='block font-bold text-blue-900' htmlFor="password">Password</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="password" name="password" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className='block font-bold text-blue-900' htmlFor="Comfirm">Confirm Password</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="password" name="confirm" id="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-red-500 font-bold'>
                            {/* {error} */}
                        </p>
                    </div>
                    <div className='mt-[20px] lg:w-[20%] w-full lg:mx-auto font-bold text-xl'>
                        <button className={`px-5 py-2 text-white cursor-pointer ${!accepted ? 'bg-blue-500' : 'bg-blue-900'}`} type="submit">Sign Up</button>
                    </div>
                    <p className='mt-2 font-bold text-xl'>
                        Already have an account ? <NavLink className={'text-blue-900'} to={'/signin'}>Sign In</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;