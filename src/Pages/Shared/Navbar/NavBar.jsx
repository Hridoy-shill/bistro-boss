import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';

const NavBar = () => {

    // const [cartItem, setCartItem] = useState([])
    const [cart] = useCart()
    console.log(cart);

    const { logOut, user } = useContext(authContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="navbar bg-slate-700 bg-opacity-20 fixed top-0 z-20 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  space-x-4 shadow bg-base-100 rounded-box w-52">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/ourMenu'}>Home</Link>
                        <Link to={'/'}>Home</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-4 menu-horizontal px-1">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/ourMenu'}>Our Menu</Link>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/dashboard/userPanel'} className="flex items-center gap-2">
                        <FaShoppingCart className='w-5 h-5'></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-full me-4">
                    <img src={user?.photoURL} title={user?.displayName} />
                </div>
                {user ?
                    <button onClick={handleLogOut} className="btn">LogOut</button> :
                    <Link to={'/login'}><button className='btn'>LogIn</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;