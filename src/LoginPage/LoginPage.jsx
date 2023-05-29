import React, { useContext, useEffect, useRef, useState } from 'react';
import logInImg from '../assets/others/authentication1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../Providers/AuthProvider';

const LoginPage = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const { logInUser } = useContext(authContext)

    const handleLoginData = (event) => {
        event.preventDefault()

        const user_captcha_value = captchaRef.current.value;
        if (!validateCaptcha(user_captcha_value)) {
            console.log('validation incorrect')
            return
        }

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                setError('')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error);
            })
    }

    const captchaRef = useRef(null)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className=' w-11/12 mx-auto  my-20 border-2 shadow-lg p-5'>
            <h3 className='font-bold text-3xl text-center p-2 border-b-2 border-black mx-auto w-fit'>LogIn</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className='w-full p-10'>
                    <img src={logInImg} alt="" />
                </div>

                <div className='w-full'>
                    <form onSubmit={handleLoginData} className='p-10 space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="email"><span className='font-bold text-lg'>Email:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-100 rounded' type="email" name="email" id="" placeholder='Type your Email' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password"><span className='font-bold text-lg'>Password:</span></label>
                            <input className='border-2 border-black p-2 bg-slate-100 rounded' type="password" name="password" id="" placeholder='Type your password' required />
                        </div>

                        <div className='flex flex-col'>
                            <LoadCanvasTemplate />
                            <input className='border-2 border-black p-2 bg-slate-100 rounded' ref={captchaRef} type="text" name="captcha" id="" placeholder='Type the text above' required />
                        </div>
                        <div>
                            <p className='font-bold text-red-700'>{error.message}</p>
                        </div>
                        <div>
                            <input className='btn btn-outline w-full' type="submit" name="Submit" id="" value={'LogIn'} />
                        </div>

                        <div className="divider">OR</div>

                        <div>
                            <p className=' text-red-700 font-bold text-center'>Don't have any account?<Link className='hover:underline' to='/login/singUp'>Create an account</Link></p>
                        </div>

                        <div>
                            <p className='font-semibold text-center'>or logIn with</p>
                            <div className='flex justify-center space-x-5 mt-4'>
                                <button><FaFacebook className='w-8 h-8'></FaFacebook></button>
                                <button><FaGoogle className='w-8 h-8'></FaGoogle></button>
                                <button> <FaGithub className='w-8 h-8'></FaGithub></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;