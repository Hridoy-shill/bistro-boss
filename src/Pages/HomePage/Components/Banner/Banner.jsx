import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../../assets/home/01.jpg'
import slider2 from '../../../../assets/home/02.jpg'
import slider3 from '../../../../assets/home/03.png'
import slider4 from '../../../../assets/home/04.jpg'

const Banner = () => {
    return (
        <Carousel className='max-w-screen-xl h-5/6'>
            <div>
                <img src={slider1} />
            </div>
            <div>
                <img src={slider2} />
            </div>
            <div>
                <img src={slider3} />
            </div>
            <div>
                <img src={slider4} />
            </div>

        </Carousel>
    );
};

export default Banner;