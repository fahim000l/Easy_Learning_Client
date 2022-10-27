import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav/SideNav';
import { UtilityContext } from '../contexts/UtilityProvider';

const CoursesLayout = () => {
    const [courseCategories, setcourseCategories] = useState([]);
    const [topNav, setTopNav] = useState(false);
    const { mode } = useContext(UtilityContext);

    useEffect(() => {
        fetch('https://assignment-10-server-coral.vercel.app/course_category')
            .then(res => res.json())
            .then(data => setcourseCategories(data))
    }, [courseCategories])

    return (
        <div className='flex lg:flex-row flex-col'>
            <button onClick={() => setTopNav(!topNav)} className={`btn ${mode ? 'btn-primary' : 'bg-black'} font-bold lg:hidden block`}>Change Category</button>
            <SideNav
                courseCategories={courseCategories}
                topNav={topNav}
                setTopNav={setTopNav}
            ></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;