import React from 'react';
import FoodCard from '../../SharedComponentsTitle/FoodCard';

const OrderTab = ({ menus }) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-3 mt-10'>
                {
                    menus.map(menu => <FoodCard key={menu._id} menu={menu}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;