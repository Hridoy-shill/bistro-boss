import React from 'react';
import banner from '../../../../assets/home/banner.jpg'

const Banner2 = () => {
    return (
        <div className='relative'>
            <img className='h-[500px] w-full object-cover' src={banner} alt="" />
            <div className='absolute top-1/3 left-40 bg-white text-black w-9/12 h-[250px] rounded text-center p-10'>
                <h1 className='font-semibold text-4xl mb-5 border-b-2 border-black w-fit mx-auto p-3 rounded-lg'>Bistro Boss</h1>
                <p className='font-semibold text-justify w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Banner2;