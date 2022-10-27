import React from 'react';
import { useContext } from 'react';
import { UtilityContext } from '../../contexts/UtilityProvider';
import Category from './Category/Category';


const SideNav = ({ courseCategories, topNav, setTopNav }) => {
    const { mode } = useContext(UtilityContext);

    return (
        <div className={`lg:w-[20%] text-white w-full ${mode ? 'bg-blue-500' : 'bg-gray-500'} lg:static duration-500 ease-in absolute lg:h-[screen] ${topNav ? 'top[0]' : 'top-[-2000000000px]'}`}>
            <h1 className={`text-3xl font-bold mt-5 ${mode ? 'text-white' : 'text-black'}`}>Click on your desired course category</h1>
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