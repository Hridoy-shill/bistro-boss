import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from '../../../../assets/home/slide1.jpg'
import slider2 from '../../../../assets/home/slide2.jpg'
import slider3 from '../../../../assets/home/slide3.jpg'
import slider4 from '../../../../assets/home/slide4.jpg'
import slider5 from '../../../../assets/home/slide5.jpg'
import Title from '../../../SharedComponentsTitle/Title';

const Category = () => {
    return (
        <>
            <Title subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}></Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='relative' src={slider1} alt="" />
                    <p className='text-3xl absolute text-white bottom-0 left-4 p-2 uppercase'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slider2} alt="" />
                    <p className='text-3xl absolute text-white bottom-0 left-4 p-2 uppercase'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slider3} alt="" />
                    <p className='text-3xl absolute text-white bottom-0 left-4 p-2 uppercase'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slider4} alt="" />
                    <p className='text-3xl absolute text-white bottom-0 left-4 p-2 uppercase'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={slider5} alt="" />
                    <p className='text-3xl absolute text-white bottom-0 left-4 p-2 uppercase'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;