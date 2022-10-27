import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQs from "../components/FAQs/FAQs";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import CoursesLayout from "../LayOut/CoursesLayOut";
import Main from "../LayOut/Main";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course_category',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/course_category',
                        element: <AllCourses></AllCourses>,
                        loader: () => fetch(`https://assignment-10-server-coral.vercel.app/courses`)
                    },
                    {
                        path: '/course_category/:id',
                        element: <Courses></Courses>,
                        loader: ({ params }) => fetch(`https://assignment-10-server-coral.vercel.app/course_category/${params.id}`)
                    },
                    {
                        path: '/course_category/course/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://assignment-10-server-coral.vercel.app/courses/${params.id}`),
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faqs',
                element: <FAQs></FAQs>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-coral.vercel.app/courses/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

// fetch('https://assignment-10-server-coral.vercel.app/course_category')