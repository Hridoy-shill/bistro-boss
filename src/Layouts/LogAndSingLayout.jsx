import React from 'react';
import { Outlet } from 'react-router-dom';

const LogAndSingLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LogAndSingLayout;