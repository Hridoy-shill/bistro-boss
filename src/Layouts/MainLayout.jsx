import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;