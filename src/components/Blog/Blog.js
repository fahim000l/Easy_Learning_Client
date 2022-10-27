import React from 'react';
import { useContext } from 'react';
import { Hero } from 'react-daisyui';
import { UtilityContext } from '../../contexts/UtilityProvider';

const Blog = () => {

    const { mode } = useContext(UtilityContext);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto lg:p-10 py-10 lg:py-0 lg:mt-[90px] mb-[90px] mt-[200px]'>
            <Hero className={`${mode ? 'bg-sky-200 text-black' : 'bg-gray-900 text-white'} w-full rounded-lg p-5`}>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">What is cors?</h1>
                        <div className="py-6 text-start">
                            <p>
                                CORS = Cross Origin Resorce.</p>
                            <p>
                                In server site , the data are by default private.
                                It Can not be accessed by the different port number. It can only be accessed bt the surver running port number. If we try to fetch data from different port number,  that will show an error.
                            </p>
                            <p>
                                However, if we set "cors" In the server site , then the data are no longer private. Those can be accessed by any other port number.
                            </p>
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
            <Hero className={`${mode ? 'bg-sky-200 text-black' : 'bg-gray-900 text-white'} w-full rounded-lg p-5`}>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <div className="py-6 text-start">
                            <p>
                                Firebase is a software service , provided bt Google.
                            </p>
                            <div className='lg:flex items-start justify-between mt-5'>
                                <p className='lg:w-[50%] w-full mx-5'>
                                    There is many more functionalities in firebase. Such as ,
                                    <ul className='list-disc'>
                                        <li>
                                            Realtime Database
                                        </li>
                                        <li>
                                            Authentication
                                        </li>
                                        <li>
                                            Authorization
                                        </li>
                                        <li>
                                            Hosting
                                        </li>
                                        <li>
                                            Machine Learning
                                        </li>
                                    </ul>
                                </p>
                                <p className='lg:w-[50%] w-full mx-5'>
                                    In this project I used authentication providers from firebase. However there are may more application other than firebase, which provides authentication system.
                                    <ul className='list-disc'>
                                        <li>2FA Authenticator</li>
                                        <li>Aegis Authenticator</li>
                                        <li>andOTP</li>
                                        <li>Authy by Twilio</li>
                                        <li>FreeOTP Authenticator</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
            <Hero className={`${mode ? 'bg-sky-200 text-black' : 'bg-gray-900 text-white'} w-full rounded-lg p-5`}>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">How does the private route work?</h1>
                        <div className="py-6 text-start">
                            <p className='mx-5'>
                                <ol className='list-decimal	'>
                                    <li>
                                        First we have to create an authentication system, using firebase or any other auth provider app.
                                    </li>
                                    <li>
                                        Then we have to set up a component for auth providers , which will provide the aithentication related functions and variables.
                                    </li>
                                    <li>
                                        Then we have to preate another component called private route. Which will allow user to access the its children component if the user is loged in.
                                    </li>
                                    <li>
                                        Then we have to put the component element, which we want to make private into the private route component .
                                    </li>
                                </ol>
                                Thus that specific route will become a private or protected route.
                            </p>
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
            <Hero className={`${mode ? 'bg-sky-200 text-black' : 'bg-gray-900 text-white'} w-full rounded-lg p-5`}>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">What is Node? How does Node work?</h1>
                        <div className="py-6 text-start">
                            <p>
                                Node is not a programming language, it uses JavaScript language as the main programming interface. Node is a desktop application (or runtime environment) that runs JavaScript files. It mainly reads and writes files on a computer/server and does networking.
                            </p>
                            <p>
                                Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn't a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it's something other than server-side JavaScript.
                            </p>
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
        </div>
    );
};

export default Blog;