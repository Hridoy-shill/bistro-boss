import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';

const SingleCart = ({ singleCart, refetch }) => {
    console.log(singleCart);
    const { image, name, price, } = singleCart;

    const handleDelete = (singleCart) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${singleCart._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </td>
                <td>
                    <h2>{name}</h2>
                </td>
                <td>${price}</td>
                <td><button><FaEdit></FaEdit></button></td>
                <td><button onClick={() => handleDelete(singleCart)}><FaTrashAlt></FaTrashAlt></button></td>
            </tr>
        
    );
};

export default SingleCart;
