import React from 'react';
import { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { UtilityContext } from '../../contexts/UtilityProvider';
import { FaFilePdf } from 'react-icons/fa';
import { createRef } from 'react';
import ReactToPdf from 'react-to-pdf'

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, course_name, details, thumbnail_url } = course
    console.log(course);
    const { mode } = useContext(UtilityContext);
    const ref = createRef();

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };


    return (
        <div className={`lg:w-[80%] lg:h-screen lg:overflow-y-scroll w-full lg:p-10 p-5 ${mode ? 'text-black' : 'text-white'}`}>
            <div className='flex items-center justify-center'>
                <NavLink to={`/checkout/${_id}`} className={`btn ${mode ? 'btn-primary' : 'bg-black'} my-5`}>Get Premiam Access</NavLink>
                <ReactToPdf targetRef={ref} filename={`${course_name}`} options={options} x={.5} y={.5} scale={.8}>
                    {({ toPdf }) => (
                        <FaFilePdf onClick={toPdf} className='ml-[10px] w-[50px] cursor-pointer h-[50px]' />
                    )}
                </ReactToPdf>
            </div>
            <div>
                <div>
                    <img className='w-full h-[500px]' src={thumbnail_url} alt="" />
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <h1 className='lg:text-9xl text-3xl font-bold my-5'>{course_name}</h1>
                    </div>
                    <p className='text-start' ref={ref}>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;