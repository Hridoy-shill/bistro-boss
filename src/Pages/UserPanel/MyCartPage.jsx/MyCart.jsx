import React from 'react';
import useCart from '../../../Hooks/useCart';
import Title from '../../SharedComponentsTitle/Title';
import SingleCart from './SingleCart/SingleCart';

const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className='bg-[#F6F6F6] w-full h-[100vh] overflow-auto'>
            <Title
                subHeading={'---Hurry Up!---'}
                heading={'MANAGE ALL ITEMS'}>
            </Title>
            <div className='w-4/5 border-2 h-fit bg-white mx-auto p-10'>
                <div className='flex justify-between items-center mb-5'> 
                    <h2 className='text-2xl font-bold'>Total items: {cart.length}</h2>
                    <h2 className='text-2xl font-bold'>Total Price: <span className='text-orange-400'>{totalPrice}</span> $</h2>
                    <button className='btn btn-outline'>Pay</button>
                </div>
                <div className="w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(singleCart => <SingleCart key={singleCart._id} singleCart={singleCart} refetch={refetch}></SingleCart>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyCart;