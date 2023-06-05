import React from 'react';
import Title from '../../../SharedComponentsTitle/Title';
import useMenu from '../../../../Hooks/useMenu';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';


const ManageItems = () => {
    const [menus, , refetch] = useMenu();
    console.log(menus);

    const handleDeleteMenu = (menu) => {
        console.log(menu);
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

                fetch(`http://localhost:5000/menus/${menu._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('access-token')}`
                    },

                })
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        refetch();
                    })
            }
        })
    }
    return (
        <div>
            <Title subHeading={'---Hurry Up!---'}
                heading={'MANAGE ALL ITEMS'}></Title>

            <div className="w-full px-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, index) =>
                                <tr key={menu._id} menu={menu}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={menu.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {menu.name}
                                    </td>
                                    <td>${menu.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs"><FaEdit className='h-6 w-6'></FaEdit></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMenu(menu)} className="btn btn-ghost btn-xs"><FaTrashAlt className='h-6 w-6'></FaTrashAlt></button>
                                    </td>
                                </tr>
                            )
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;