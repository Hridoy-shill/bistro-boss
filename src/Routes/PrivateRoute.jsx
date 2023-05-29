import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation()

    if (user) {
        return children
    }
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <button className="btn btn-square btn-outline loading"></button>
        </div>
    }

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;