import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const selectedCategory = useLoaderData();
    // console.log(selectedCategory);
    return (
        <div className='w-[80%] grid grid-cols-3 gap-5 p-60'>
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