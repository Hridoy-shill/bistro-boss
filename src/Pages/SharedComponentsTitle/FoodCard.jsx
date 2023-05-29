import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ menu }) => {
    const { image, name, price, recipe, _id } = menu
    const { user } = useContext(authContext)
    const navigate = useNavigate()

   

    const handleAddToCart = (menu) => {
        
        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        alert('menu added successfully')
                    }
                    else{
                        alert('please login for add menu')
                        navigate('/login')
                    }
                })
        }
    }

    return (
        <div>
            <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>{price} $</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(menu)} className="btn btn-outline">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;