import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import { UtilityContext } from '../../contexts/UtilityProvider';

const SignUp = () => {
    const { createUser, setProfile, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    // const location = useLocation();
    const navigate = useNavigate();
    const { mode } = useContext(UtilityContext);
    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        console.log(email, password, confirm, name, photoUrl);


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
                profileUpdate(name, photoUrl);
                console.log(user);
                setUser(user);
                navigate('/');
                window.location.reload();
                // window.location.reload();
                Swal.fire('Your account has been created.');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };

    // const verifyEmail = () => {
    //     emailVerification()
    //         .then(() => { })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }


    const profileUpdate = (name, photoUrl) => {

        const profile = {
            displayName: name,
            photoURL: photoUrl
        };

        setProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className={`border-[5px] ${mode ? 'border-blue-900 bg-blue-200' : 'border-black bg-gray-500'} rounded-lg text-start border-solid lg:w-[50%] w-[90%] mx-auto mb-5 mt-[60%] lg:mt-[5%] lg:px-[55px] px-5 py-[37px]`}>
                <h1 className={`text-5xl ${mode ? 'text-blue-900' : 'text-white'} font-bold`}>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col-reverse lg:flex-row justify-evenly w-full'>
                        <div className='lg:mx-5 mx-0 w-full'>
                            <div className='mt-[20px]'>
                                <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="name">User Name</label>
                                <input className={`px-3 py-2 w-full border-b-[5px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="text" name="name" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="photo">Photo URL</label>
                                <input className={`px-3 py-2 w-full border-b-[5px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="text" name="photoUrl" id="" />
                            </div>
                        </div>
                        <div className='lg:mx-5 mx-0 w-full'>
                            <div className='mt-[15px]'>
                                <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="email">Email</label>
                                <input required className={`px-3 py-2 w-full border-b-[5px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="email" name="email" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="password">Password</label>
                                <input required className={`px-3 py-2 w-full border-b-[5px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="password" name="password" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className={`block font-bold ${mode ? 'text-blue-900' : 'text-white'}`} htmlFor="Comfirm">Confirm Password</label>
                                <input required className={`px-3 py-2 w-full border-b-[5px] rounded-lg border-solid ${mode ? 'border-blue-900' : 'border-black'}`} type="password" name="confirm" id="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-red-500 font-bold'>
                            {error}
                        </p>
                    </div>
                    <div className='mt-[20px] lg:w-[20%] w-full lg:mx-auto font-bold text-xl'>
                        <button className={`px-5 py-2 text-white cursor-pointer ${mode ? 'bg-blue-900' : 'bg-gray-900'}`} type="submit">Sign Up</button>
                    </div>
                    <p className={`mt-2 font-bold text-xl ${mode ? 'text-black' : 'text-white'}`}>
                        Already have an account ? <NavLink className={mode ? 'text-blue-900' : 'text-black'} to={'/signin'}>Sign In</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;