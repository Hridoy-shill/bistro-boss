import React, { useEffect, useState } from 'react';
import Title from '../../../SharedComponentsTitle/Title';
import SingleMenu from './SingleMenu/SingleMenu';
import useMenu from '../../../../Hooks/useMenu';

const Menus = () => {
    const [menus] = useMenu();
    const popular = menus.filter(item => item.category === 'popular');
    return (
        <div>
            <Title
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}></Title>
            <div className='grid grid-cols-2 gap-4'>
                {
                    popular.map(menu => <SingleMenu key={menu._id} menu={menu} ></SingleMenu>)
                }
            </div>
           
        </div>
    );
};

export default Menus;