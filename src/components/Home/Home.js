import React from 'react';
import bannerImage from '../../media/banner_image.jfif'

const Home = () => {
    return (
        <div className="mt-[50%] lg:mt-[10%] mb-[20%] lg:mb-0 w-[90%] mx-auto card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={bannerImage} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">About Us!</h2>
                <p className='text-start'>
                    This is an E-Learning web site. This site contains multiple courses of different categories. We have come domumentations about the specific course. You can download the documentation as pdf by using our premium access
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default Home;