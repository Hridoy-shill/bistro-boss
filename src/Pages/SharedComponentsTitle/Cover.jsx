import React from 'react';

const Cover = ({heading, subHeading, bgImg}) => {
    return (
        <div className="hero lg:h-[650px]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className="w-4/5 h-[250px] flex flex-col justify-center  bg-black bg-opacity-50">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5">{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;