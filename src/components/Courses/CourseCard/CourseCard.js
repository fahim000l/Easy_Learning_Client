import React from 'react';
import { FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { course_name, rating, thumbnail_url, total_view, author } = course
    return (
        <div className='bg-blue-200 font-bold rounded-lg w-full'>
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
                <NavLink className={'btn btn-primary'}>Show Details</NavLink>
            </div>
        </div>
    );
};

export default CourseCard;