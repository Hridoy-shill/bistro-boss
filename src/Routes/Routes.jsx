import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import SingUpPage from "../SingUpPage/SingUpPage";
import LoginPage from "../LoginPage/LoginPage";
import LogAndSingLayout from "../Layouts/LogAndSingLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/DashboardLayout";

import UserPanel from "../Pages/Deshborad/UserPanel/UserPanel";
import MyCart from "../Pages/Deshborad/UserPanel/MycartPage/MyCart";
import AdminPanel from "../Pages/Deshborad/AdminPanel/AdminPanel";
import AllUsers from "../Pages/Deshborad/AdminPanel/AllUsers/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/orders',
                element: <PrivateRoute><OrderPage></OrderPage></PrivateRoute>
            },
        ]
    },
    {
        path: '/login',
        element: <LogAndSingLayout></LogAndSingLayout>,
        children: [
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'singUp',
                element: <SingUpPage></SingUpPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userPanel',
                element: <UserPanel></UserPanel>
            },
            {
                path: 'adminPanel',
                element: <AdminPanel></AdminPanel>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
        ]
    }
]);

export default router;

