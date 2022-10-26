import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import CoursesLayout from "../LayOut/CoursesLayOut";
import Main from "../LayOut/Main";
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
        ]
    },
]);

// fetch('https://assignment-10-server-coral.vercel.app/course_category')