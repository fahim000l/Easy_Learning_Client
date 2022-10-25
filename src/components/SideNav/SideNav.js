import React from 'react';
import Category from './Category/Category';

const SideNav = ({ courseCategories }) => {

    return (
        <div className='w-[20%] bg-sky-300 p-5'>
            <h1 className='text-3xl font-bold text-white'>Select your desired course</h1>
            {
                courseCategories.map(courseCategory => <Category
                    key={courseCategory.id}
                    courseCategory={courseCategory}
                ></Category>)
            }
        </div>
    );
};

export default SideNav;