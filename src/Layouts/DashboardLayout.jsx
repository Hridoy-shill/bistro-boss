import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCommentAlt, FaCalendarDay, FaOutdent, FaShopify, FaComment, FaUtensils, FaBars, FaBookReader, FaUsers } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const [cart] = useCart()
    // const isAdmin = true
    const [refetch, isAdmin] = useAdmin();
    console.log(isAdmin);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side custom-drawer">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminPanel'}><FaHome></FaHome> Admin Home</NavLink></li>

                                <li><NavLink to={'/dashboard/addItem'}><FaUtensils></FaUtensils>add an items</NavLink></li>

                                <li><NavLink to={'/'}><FaBars></FaBars> manage items</NavLink></li>

                                <li><NavLink to={'/'}><FaBookReader></FaBookReader>Manage bookings</NavLink></li>

                                <li><NavLink to={'/dashboard/allUsers'}><FaUsers></FaUsers> all users</NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/userPanel'}><FaHome></FaHome> User Home</NavLink></li>

                                <li><NavLink to={'/'}><FaCalendarAlt></FaCalendarAlt> reservation</NavLink></li>

                                <li><NavLink to={'/'}><FaWallet></FaWallet> payment history</NavLink></li>

                                <li><NavLink to={'/'}><FaCommentAlt></FaCommentAlt> add review</NavLink></li>

                                <li><NavLink to={'/'}><FaCalendarDay></FaCalendarDay> my booking</NavLink></li>
                            </>
                    }
                    <li><NavLink to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart> my cart <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>

                    <div className="divider">OR</div>

                    <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>

                    <li><NavLink to={'/ourMenu'}><FaOutdent></FaOutdent> Menu</NavLink></li>

                    <li><NavLink to={'/orders'}><FaShopify></FaShopify> Shop</NavLink></li>

                    <li><NavLink to={'/'}><FaComment></FaComment>Contact</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;