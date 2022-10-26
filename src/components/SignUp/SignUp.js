import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, emailVerification } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const conditions = form.conditions.checked;
        console.log(email, password, confirm, name, photoUrl, conditions);

        if (password !== confirm) {
            setError('Password did not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                verifyEmail();
                Swal.fire('Your account has been created.',
                    'Please check your email to varify the account'
                );
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };

    const verifyEmail = () => {
        emailVerification()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const handleCondition = (event) => {
        if (event.target.checked) {
            setAccepted(true);
        }
        else {
            setAccepted(false)
        }
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='border-[5px] bg-blue-200 rounded-lg text-start border-solid border-blue-900 lg:w-[50%] w-[90%] mx-auto mb-5 mt-[60%] lg:mt-[5%] lg:px-[55px] px-5 py-[37px]'>
                <h1 className='text-5xl text-blue-900 font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col-reverse lg:flex-row justify-evenly w-full'>
                        <div className='lg:mx-5 mx-0 w-full'>
                            <div className='mt-[20px]'>
                                <label className='block font-bold text-blue-900' htmlFor="name">User Name</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="text" name="name" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className='block font-bold text-blue-900' htmlFor="photo">Photo URL</label>
                                <input className='px-3 py-2 w-full border-b-[5px] rounded-lg border-solid border-blue-900' type="text" name="photoUrl" id="" />
                            </div>
                            <div className='mt-[20px]'>
                                <input onClick={handleCondition} type="checkbox" name="conditions" id="" />
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
                            {error}
                        </p>
                    </div>
                    <div className='mt-[20px] lg:w-[20%] w-full lg:mx-auto font-bold text-xl'>
                        <button disabled={!accepted} className={`px-5 py-2 text-white cursor-pointer ${!accepted ? 'bg-blue-500' : 'bg-blue-900'}`} type="submit">Sign Up</button>
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