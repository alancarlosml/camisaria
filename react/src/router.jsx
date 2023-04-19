import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Customers from "./views/Customers";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Navigate to="/" />
            // },
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/customers',
                element: <Customers />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    },    
]);

export default router;