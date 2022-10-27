import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UtilityContext } from '../../contexts/UtilityProvider';
import bannerImage from '../../media/banner_image.jfif'

const Home = () => {
    const { mode } = useContext(UtilityContext)
    return (
        <div className="mt-[80%] h-full lg:mt-[10%] lg:my-auto w-[90%] mx-auto card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-full'><img className='w-full' src={bannerImage} alt="Album" /></figure>
            <div className={`card-body ${mode ? undefined : 'bg-gray-500 text-white font-bold'}`}>
                <h2 className="card-title">About Us!</h2>
                <p className='text-start lg:text-2xl'>
                    This is an E-Learning web site. This site contains multiple courses of different categories. We have come domumentations about the specific course, based on categories. You can download the documentation as pdf by using our premium access.
                </p>
                <p className='text-start lg:text-2xl'>All These courses will help you to gain knowledge about science and engineering knowledge</p>
                <div className="card-actions justify-end">
                    <NavLink to={'signup'} className={`btn ${mode ? 'btn-primary' : 'bg-black'}`}>Get Started</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;