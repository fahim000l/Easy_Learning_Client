import React from 'react';
import { useContext } from 'react';
import { UtilityContext } from '../../contexts/UtilityProvider';

const FAQs = () => {
    const { mode } = useContext(UtilityContext);
    return (
        <section className={`light:bg-gray-800 light:text-gray-100 text-start lg:text-5xl text-3xl ${mode ? 'text-black' : 'text-white'}`}>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Stay tuned</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Purpose of this Application?</summary>
                        <div className="px-4 pb-4">
                            <p>This application provides some important courses based on differentcategories.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Is thia a single page Application?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes , indeed. </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Target user?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Any porson having the thirst of knowledge and working on developing skills in IT section.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQs;