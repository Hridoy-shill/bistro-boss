import React from 'react';
import useMenu from '../../../../Hooks/useMenu';
import SingleSoup from './SingleSoup';
import { Link } from 'react-router-dom';

const SoupMenus = () => {
    const [menus] = useMenu();
    const soupMenus = menus.filter(item => item.category === 'soup');
    console.log(soupMenus);
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                {
                    soupMenus.map(menu => <SingleSoup key={menu._id} menu={menu}></SingleSoup>)
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

export default SoupMenus;