import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [refetch, isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    
    if (loading || isAdminLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <button className="btn btn-square btn-outline loading"></button>
        </div>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/'} state={{from:location}} replace></Navigate>;
};

export default AdminRoute;