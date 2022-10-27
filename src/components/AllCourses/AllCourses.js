import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div className='lg:w-[80%] overflow-y-scroll w-full grid lg:grid-cols-3 grid-cols-1 gap-5 h-screen lg:p-[60px] px-2 py-10'>
            {
                courses.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default AllCourses;