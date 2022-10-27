import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const selectedCategory = useLoaderData();

    return (
        <div className='lg:w-[80%] mt-10 lg:mt-0 w-full lg:h-screen grid lg:grid-cols-3 grid-cols-1 gap-5 h-screen lg:p-[60px] px-2 overflow-y-scroll'>
            {
                selectedCategory.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;