import React, { useState } from 'react';
import ordersBanner from '../../assets/shop/banner2.jpg';
import Cover from '../SharedComponentsTitle/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../SharedComponentsTitle/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu()
    // const {category} = useParams()
    // console.log(category);

    const pizzaMenus = menus.filter(item => item.category === 'pizza');
    const dessertMenus = menus.filter(item => item.category === 'dessert');
    const saladMenus = menus.filter(item => item.category === 'salad');
    const soupMenus = menus.filter(item => item.category === 'soup');
    const todayOffer = menus.filter(item => item.category === 'offered');

    return (
        <div>
            <div className='mb-10'>
                <Cover
                    bgImg={ordersBanner}
                    heading={'OUR SHOP'}
                    subHeading={"Would you like to try a dish?"}
                ></Cover>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='text-center'>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <OrderTab menus={saladMenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menus={pizzaMenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menus={soupMenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menus={dessertMenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab menus={todayOffer}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderPage;