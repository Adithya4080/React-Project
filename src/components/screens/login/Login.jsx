import React from 'react';
import NavbarMiddle from '../../Includes/navbar/NavbarMiddle';
import Footer from '../../Includes/footer/Footer';
import { Helmet } from 'react-helmet';
import Button from '../../general/Button';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <Helmet>
                <title>Login | Grogin</title>
            </Helmet>
            <NavbarMiddle />
            <div className='py-20 wrapper'>
                <div className='flex justify-center items-center  text-white'>
                    <div className='bg-black p-6 rounded-md space-y-4 w-5/12'>
                        <h2 className='font-bold text-2xl flex justify-center items-center'>Login</h2>
                        <div>
                            <p className='ml-1'>Username</p>
                            <input
                                type='email' 
                                placeholder='Enter your Email Id' 
                                className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                            />
                        </div>
                        <div>
                            <p className='ml-1'>Password</p>
                            <input
                                type='email' 
                                placeholder='Enter your password' 
                                className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                            />
                            <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
                        </div>
                        <div className='flex justify-center items-center'><Button text='Login' /></div>
                        <div className='flex justify-center items-center'>
                            <p>Not a Member? <Link to='/auth/create' className='text-green-500 underline'>Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login