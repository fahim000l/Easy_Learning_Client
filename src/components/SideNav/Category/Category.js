import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Dropdown } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import { UtilityContext } from '../../../contexts/UtilityProvider';

const Category = ({ courseCategory, topNav, setTopNav }) => {

    const { name, id } = courseCategory;
    const [select, setSelect] = useState(false);
    const [courses, setCourses] = useState([]);
    const { mode } = useContext(UtilityContext);
    useEffect(() => {
        fetch(`https://assignment-10-server-coral.vercel.app/course_category/${id}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [id])


    return (
        <div className='w-full p-5'>
            <Dropdown onMouseLeave={() => setSelect(false)} className='w-full duration-700 ease-in'>
                <NavLink to={`/course_category/${id}`} className={`w-full btn ${mode ? 'btn-primary' : 'bg-black'}`} id='required' onClick={() => setTopNav(!topNav)} onMouseOver={() => setSelect(true)}>{name}</NavLink>
                <div className={`w-full rounded-lg duration-500 ease-in ${select ? 'lg:block hidden' : 'hidden'}`}>
                    {
                        courses.map(course => <div
                            key={course._id}
                            className={'flex justify-between w-full mt-2'}
                        >
                            <p className='font-bold'>{course.course_name}</p>
                            <NavLink to={`/course_category/course/${course._id}`} className={`btn ${mode ? 'btn-primary' : 'bg-black'} mx-0 my-0`}>Show details</NavLink>
                        </div>)
                    }

                </div>
            </Dropdown>
        </div>
    );
};

export default Category;





