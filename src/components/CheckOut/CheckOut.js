import React, { useContext } from 'react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { UtilityContext } from '../../contexts/UtilityProvider';

const CheckOut = () => {
    const checkoutCourse = useLoaderData();
    const { course_name, rating, thumbnail_url, total_view, author } = checkoutCourse;
    const { mode } = useContext(UtilityContext);
    const [rmv, setRmv] = useState(false);

    if (rmv) {
        return <h1 className='text-5xl text-blue-600 font-bold my-52'>CheckOut page is empty</h1>
    }
    else {

        return (
            <div className={`${mode ? 'bg-blue-200' : 'bg-gray-900 text-white'} font-bold rounded-lg my-52 w-[90%] lg:w-[25%] mx-auto ${rmv ? 'hidden' : 'block'}`}>
                <div className='lg:flex items-center justify-between'>
                    <div className='flex items-center justify-center p-5'>
                        <img className='w-[60px] h-[60px] rounded-full' src={author.img} alt="" />
                        <div className='text-start mx-2'>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='mx-3 my-2'>
                        <p>Rating :{rating.number}</p>
                        <p>{rating.badge}</p>
                    </div>
                </div>
                <div>
                    <img className='w-full h-[200px]' src={thumbnail_url} alt="" />
                    <p className='text-3xl font-bold mt-2'>{course_name}</p>
                </div>
                <div className='flex items-center justify-between mt-5 w-full px-5 py-2'>
                    <div className='flex items-center w-full'>
                        <FaEye />
                        <p className='mx-2'>{total_view}</p>
                    </div>
                    <button onClick={() => setRmv(true)} className={'px-5 py-2 rounded-lg text-white font-bold w-full hover:bg-red-800 bg-red-600 flex items-center justify-evenly'}>
                        <FaWindowClose />
                        <p>Remove CheckOut</p></button>
                </div>
            </div>
        );
    }
};

export default CheckOut;