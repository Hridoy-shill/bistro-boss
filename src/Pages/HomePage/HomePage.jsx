import React from 'react';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Banner2 from './Components/Banner2/Banner2';
import Menus from './Components/Menus/Menus';
import FeaturedBanner from './FeaturedBanner/FeaturedBanner';
import ReviewSection from './Components/ReviewSection/ReviewSection';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-10'>
                <Category></Category>
            </div>
            <div className='my-20'>
                <Banner2></Banner2>
            </div>
            <div className='my-20'>
                <Menus></Menus>
            </div>
            <div className='my-20'>
                <FeaturedBanner></FeaturedBanner>
            </div>
            <div>
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
};

export default HomePage;