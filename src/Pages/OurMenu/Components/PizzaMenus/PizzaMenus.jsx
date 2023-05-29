import React from 'react';
import SinglePizza from './SinglePizza';
import useMenu from '../../../../Hooks/useMenu';
import { Link } from 'react-router-dom';

const PizzaMenus = () => {
    const [menus] = useMenu();
    const pizzaMenus = menus.filter(item => item.category === 'pizza');
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                {
                    pizzaMenus.map(menu => <SinglePizza key={menu._id} menu={menu}></SinglePizza>)
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

export default PizzaMenus;