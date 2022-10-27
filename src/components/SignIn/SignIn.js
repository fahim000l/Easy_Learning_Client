import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../media/google.png';
import gitIcon from '../../media/github-octocat-logo-vector-png--896-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { UtilityContext } from '../../contexts/UtilityProvider';


const SignIn = () => {
    const { signIn, forgetPassword, googleSignIn, gitSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { mode } = useContext(UtilityContext);

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }

    const handleEmail = (event) => {
        setUserEmail(event.target.value);
    }

    const handleReset = () => {

        if (!userEmail) {
            Swal.fire('Please provide your emil, to reset password');
            return;
        }

        forgetPassword(userEmail)
            .then(() => {
                Swal.fire('Check your email to reset password');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGitSignIn = () => {
        gitSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center pb-5'>
            <div className={`border-[5px] rounded-lg w-[90%] text-start border-solid ${mode ? 'border-blue-900 bg-blue-200' : 'border-black bg-gray-500'} lg:w-[30%] mx-auto mb-5 mt-[60%] lg:mt-[2%] lg:px-[55px] px-5 py-[37px]`}>
                <h1 className={`text-5xl ${mode ? 'text-blue-900' : 'text-white'} font-bold`}>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-[53.97px]'>
                        <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="email">Email</label>
                        <input required onBlur={handleEmail} className={`px-3 py-2 w-full rounded-lg border-b-[5px] border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="email" name="email" id="" />
                    </div>
                    <div className='mt-[50px]'>
                        <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="password">Password</label>
                        <input required className={`px-3 py-2 w-full rounded-lg border-b-[5px] border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="password" name="password" id="" />
                    </div>
                    <div className='mt-[20px]'>
                        <p className='text-red-500 font-bold'>
                            {error}
                        </p>
                    </div>
                    <div className='mt-[20px] font-bold text-xl'>
                        <button className={`${mode ? 'bg-blue-900' : 'bg-gray-900'} w-full text-white px-5 py-2`} type="submit">Sign In</button>
                    </div>
                </form>
                <p className={`${mode ? 'text-black' : 'text-white'} mt-[20px] font-bold`}>
                    Forgot Password ? <button onClick={handleReset} className={mode ? 'text-blue-900' : 'text-black'}>Reset</button>
                </p>
                <p className={`mt-5 font-bold text-xl ${mode ? 'text-black' : 'text-white'}`}>
                    doesn't have an account ? <NavLink className={mode ? 'text-blue-900' : 'text-black'} to={'/signup'}>Sign Up</NavLink>
                </p>
            </div>
            <div className='flex items-center w-[90%] lg:w-[25%] mt-[10px]'>
                <hr className={`border-[3px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-gray-900'} w-full`} />
                <p className='mx-[5px] text-xl font-bold'>Or</p>
                <hr className={`border-[3px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-gray-900'} w-full`} />
            </div>
            <div className='lg:w-[30%] w-[90%]'>
                <div onClick={handleGitSignIn} className={`cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[5px] ${mode ? 'text-blue-900' : 'text-white'} border-solid ${mode ? 'border-blue-900 bg-blue-200' : 'border-black bg-gray-500'}`}>
                    <img className='w-[37px] h-[37px]' src={gitIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with GitHub</p>
                </div>
                <div onClick={handleGoogleSignIn} className={`cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[5px] ${mode ? 'text-blue-900' : 'text-white'} border-solid ${mode ? 'border-blue-900 bg-blue-200' : 'border-black bg-gray-500'}`}>
                    <img className='w-[37px] h-[37px]' src={googleIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;