import React, { useEffect, useState } from 'react';
import Title from '../../../SharedComponentsTitle/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewSection = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Title
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}>
            </Title>

            <div className='mx-10'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id} review={review}>
                            <div className='mx-20'>
                                <Rating className='mx-auto my-5' style={{ maxWidth: 150 }} value={review.rating} />
                                <FaQuoteLeft className='font-extrabold text-5xl mx-auto '></FaQuoteLeft>
                                <p className='text-justify w-3/4 mx-auto py-5'>{review.details}</p>
                                <p className='text-center font-bold text-2xl text-orange-400'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>


            </div>

        </div>
    );
};

export default ReviewSection;