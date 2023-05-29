import React from 'react';
import useMenu from '../../../../Hooks/useMenu';
import SingleDessert from './SingleDessert';
import { Link } from 'react-router-dom';

const DessertMenus = () => {
    const [menus] = useMenu();
    const dessertMenus = menus.filter(item => item.category === 'dessert');
    console.log(dessertMenus);
    
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                {
                    dessertMenus.map(menu => <SingleDessert key={menu._id} menu={menu}></SingleDessert>)
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

export default DessertMenus;