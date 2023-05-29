import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div className='text-center my-8'>
            <p className='text-yellow-600 text-sm mb-3'>{subHeading}</p>
            <h3 className='border-t-4 border-b-4 px-8 py-3 w-fit mx-auto font-semibold text-2xl'>{heading}</h3>
        </div>
    );
};

export default Title;