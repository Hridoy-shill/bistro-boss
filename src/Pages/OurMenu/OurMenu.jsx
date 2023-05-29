import React from 'react';
import Cover from '../SharedComponentsTitle/Cover';
import ourOrderBanner from '../../assets/menu/banner3.jpg';
import dessertBanner from '../../assets/menu/dessert-bg.jpeg';
import soupBanner from '../../assets/menu/soup-bg.jpg';
import pizzaBanner from '../../assets/menu/pizza-bg.jpg'
import saladBanner from '../../assets/menu/salad-bg.jpg';
import Title from '../SharedComponentsTitle/Title';
import TodayOfferMenus from './Components/Today\'s Offer/TodayOfferMenus';
import DessertMenus from './Components/DessertMenus/DessertMenus';
import SoupMenus from './Components/SoupMenus/SoupMenus';
import PizzaMenus from './Components/PizzaMenus/PizzaMenus';
import SaladMenus from './Components/SaladMenus/SaladMenus';
import { Link } from 'react-router-dom';



const OurMenu = () => {
    return (
        <>
            <div className='mb-10'>
                <Cover
                    bgImg={ourOrderBanner}
                    heading={'OUR MENU'}
                    subHeading={'Would you like to try a dish?'}
                ></Cover>
            </div>

            {/* today's offer */}
            <div>
                <Title
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></Title>
                <TodayOfferMenus></TodayOfferMenus>
            </div>

            {/* DESSERTS Menu's */}

            <div>
                <Cover
                    bgImg={dessertBanner}
                    heading={'DESSERTS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <div className='my-10'>
                    <DessertMenus></DessertMenus>
                </div>
            </div>

            {/* PIZZA Menu's */}

            <div>
                <Cover
                    bgImg={pizzaBanner}
                    heading={'PIZZA'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <div className='my-10'>
                    <PizzaMenus></PizzaMenus>
                </div>
            </div>

            {/* SALADS Menu's */}

            <div>
                <Cover
                    bgImg={saladBanner}
                    heading={'SALADS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <div className='my-10'>
                    <SaladMenus></SaladMenus>
                </div>
            </div>

            {/* SOUPS Menu's */}

            <div>
                <Cover
                    bgImg={soupBanner}
                    heading={'SOUPS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
                <div className='my-10'>
                    <SoupMenus></SoupMenus>
                </div>
            </div>
        </>
    );
};

export default OurMenu;