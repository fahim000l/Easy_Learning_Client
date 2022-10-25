import React from 'react';

const CourseCard = ({ course }) => {
    const { course_name, rating, thumbnail_url, total_view, author } = course
    return (
        <div className=''>
            <div className='flex bg-blue-200 items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author.img} alt="" />
                    <div className='text-start'>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <p>Rating :{rating.number}</p>
                    <p>{rating.badge}</p>
                </div>
            </div>
            <div>
                <img className='w-full h-[200px]' src={thumbnail_url} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default CourseCard;