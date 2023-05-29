import React from 'react';
import useMenu from '../../../../Hooks/useMenu';
import SingleSalad from './SingleSalad';
import { Link } from 'react-router-dom';

const SaladMenus = () => {
    const [menus] = useMenu();
    const saladMenus = menus.filter(item => item.category === 'salad');
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                {
                    saladMenus.map(menu => <SingleSalad key={menu._id} menu={menu}></SingleSalad>)
                }
            </div>
            <div className='w-full text-center my-5'>
                <Link to={'/orders'}>
                    <button className='btn btn-outline border-0 border-b-2 rounded-lg w-fit'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </>
    );
};

export default SaladMenus;