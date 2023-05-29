import React from 'react';

const SingleMenu = ({ menu }) => {

    const { image, name, price, recipe } = menu

    return (
        <div className='p-3'>
            <div className="flex justify-evenly">
                <div className="w-28 mask mask-hexagon border-2 border-black">
                    <img src={image} />
                </div>
                <div className='w-2/3'>
                    <h3 className='text-2xl font-extralight '>{name} ------------------</h3>
                    <p className='text-base text-gray-500'>{recipe}</p>
                </div>
                <div>
                    <p className='text-yellow-600 font-semibold text-lg'>{price}$</p>
                </div>
            </div>
        </div>
    );
};

export default SingleMenu;