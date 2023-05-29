import React from 'react';
import useMenu from '../../../../Hooks/useMenu';
import OfferMenu from './OfferMenu';
import { Link } from 'react-router-dom';

const TodayOfferMenus = () => {
    const [menus] = useMenu();
    const todayOffer = menus.filter(item => item.category === 'offered');
    console.log(todayOffer);
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                {
                    todayOffer.map(menu => <OfferMenu key={menu._id} menu={menu} ></OfferMenu>)
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

export default TodayOfferMenus;