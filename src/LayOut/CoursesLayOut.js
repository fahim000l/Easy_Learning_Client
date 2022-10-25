import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav/SideNav';

const CoursesLayout = () => {
    const [courseCategories, setcourseCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-coral.vercel.app/course_category')
            .then(res => res.json())
            .then(data => setcourseCategories(data))
    }, [courseCategories])

    return (
        <div className='flex'>
            <SideNav
                courseCategories={courseCategories}
            ></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;