import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: allUser = [], refetch } = useQuery(['allUsers'], async () => {
        const token = localStorage.getItem('access-token');
        const res = await fetch('http://localhost:5000/allUsers',{
            headers:{
                authorization: `bearer ${token}`
            }
        })
        return res.json();
    })

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/allUsers/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    alert(`${user.name} promoted to admin`)
                }
            })
    }

    const handleDeleteUser = id => {
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
                fetch(`http://localhost:5000/allUsers/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            refetch()
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div className='w-full mt-10 p-10'>
            <h2 className='mb-5 text-3xl text-center font-semibold'>Total User: {allUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleAdmin(user)}><FaUserShield className='w-7 h-7'></FaUserShield></button>}</td>
                                <td><button onClick={() => handleDeleteUser(user._id)}><FaTrash className='w-6 h-6'></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;