import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { course_name, details, thumbnail_url } = course
    console.log(course);
    return (
        <div className='lg:w-[80%] w-full lg:p-10 p-5'>
            <NavLink className='btn btn-primary my-5'>Get Premiam Access</NavLink>
            <div>
                <div>
                    <img className='w-full h-[500px]' src={thumbnail_url} alt="" />
                </div>
                <div>
                    <h1 className='lg:text-9xl text-3xl font-bold my-5'>{course_name}</h1>
                    <p className='text-start'>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;