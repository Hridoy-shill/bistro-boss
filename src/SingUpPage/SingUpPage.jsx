import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingUpImg from '../assets/others/authentication2.png';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { authContext } from '../Providers/AuthProvider';

const SingUpPage = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const text = (saveUser, reset) => {
        fetch('http://localhost:5000/newUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId && reset) {
                    reset();
                }

            })
    }


    const { createUser, updateUserProfile, createGoogleUser } = useContext(authContext);


    const handleSingUpData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const userImg = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const newCreatedUser = result.user;
                console.log(newCreatedUser);
                setUser(newCreatedUser)
                updateUserProfile(name, userImg)
                    .then(() => {
                        const saveUser = { name, email, userImg }
                        // fetch('http://localhost:5000/newUser', {
                        //     method: 'POST',
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(saveUser)
                        // })
                        //     .then(res => res.json())
                        //     .then(data => {
                        //         if (data.insertedId) {
                        //             form.reset();
                        //         }
                        //     })
                        text(saveUser, form.reset)
                    })
                setError('');
                navigate('/')
            })
            .catch(error => {
                setError(error);
            })


    }
    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const userData = {name: loggedUser.displayName, email:  loggedUser.email, userImg: loggedUser.photoURL}
                text(userData)
                setError("")
            })
            .catch(error => {
                setError(error);
            })
    }

    return (
        <div className='mt-20 w-11/12 mx-auto my-20 border-2 shadow-lg p-5'>
            <h3 className='font-bold text-3xl text-center p-2 border-b-2 border-black mx-auto w-fit'>SingUp</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className='w-full'>
                    <form onSubmit={handleSingUpData} className='p-10 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Name:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-300' type="text" name="name" id="" placeholder='Type your name' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name"><span className='font-bold text-lg'>PhotoURL:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-300' type="text" name="photo" id="" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email"><span className='font-bold text-lg'>Email:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-300' type="email" name="email" id="" placeholder='Type your Email' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password"><span className='font-bold text-lg'>Password:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-300' type="password" name="password" id="" placeholder='Type your password' />
                        </div>
                        <div>
                            <p className='font-bold text-red-600'>{error.message}</p>
                        </div>
                        <div>
                            <input className='btn btn-outline w-full' type="submit" name="Submit" id="" value={'SingUp'} />
                        </div>
                        <div className="divider">OR</div>
                        <div className='text-center'>
                            <p className=' text-red-700 font-bold'>Already have a account?<Link className='hover:underline' to='/login'>LogIn</Link></p>
                        </div>
                        <div>
                            <p className='font-semibold text-center'>or logIn with</p>
                            <div className='flex justify-center space-x-5 mt-4'>
                                <button><FaFacebook className='w-8 h-8'></FaFacebook></button>
                                <button onClick={handleGoogleLogin}><FaGoogle className='w-8 h-8'></FaGoogle></button>
                                <button> <FaGithub className='w-8 h-8'></FaGithub></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-full p-10'>
                    <img src={SingUpImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default SingUpPage;