import React from 'react';
import featured from '../../../assets/home/featured.jpg';
import Title from '../../SharedComponentsTitle/Title';
import './featured-section.css';

const FeaturedBanner = () => {
    return (
        <div className='featured-section bg-fixed  px-10 py-10'>
            <div className='top-1/2 text-white'>
                <Title
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></Title>

                <div className='flex items-center bg-black bg-opacity-70 w-2/3 gap-4 mx-auto p-10'>
                    <div className='w-2/3'>
                        <img className='rounded-md' src={featured} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-white text-xl font-bold'>March 20, 2023 <br />
                            WHERE CAN I GET SOME?
                        </h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='text-white font-bold text-lg border-b-2 border-white rounded-lg w-fit px-5 py-2 mt-5 btn btn-outline border-0'>Read More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBanner;