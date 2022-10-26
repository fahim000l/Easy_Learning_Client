import React from 'react';
import Category from './Category/Category';

const SideNav = ({ courseCategories, topNav, setTopNav }) => {

    return (
        <div className={`lg:w-[20%] w-full bg-sky-300 lg:static duration-500 ease-in absolute p-5 pb-[100px] ${topNav ? 'top[0]' : 'top-[-2000000000px]'}`}>
            <h1 className='text-3xl font-bold text-purple-500'>Click on your desired course</h1>
            {
                courseCategories.map(courseCategory => <Category
                    key={courseCategory.id}
                    courseCategory={courseCategory}
                    topNav={topNav}
                    setTopNav={setTopNav}
                ></Category>)
            }
        </div>
    );
};

export default SideNav;