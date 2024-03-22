import React, { useState, useContext } from 'react';
import Footer from '../../Includes/footer/Footer';
import { Helmet } from 'react-helmet';
import Button from '../../general/Button';
import { Link, useNavigate } from 'react-router-dom';
import PromptBar from '../../Includes/PromptBar';
import axios from 'axios';
import { Store } from '../../context/Store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { updateUserData } = useContext(Store);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setMessage("")
        e.preventDefault();
        axios
        .post("https://traveller.talrop.works/api/v1/auth/token/",{username, password})
        .then((response) => {
            let data = response.data;
            localStorage.setItem("user_data", JSON.stringify(data));
            updateUserData({ type:"LOGIN",payload: data })
            toast.success("Logged in Successful!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            navigate("/")
        }).catch(error => {
            if (error.response.status === 401) {
                setMessage(error.response.data.detail)
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Login | Grogin</title>
            </Helmet>
            <PromptBar />
            <div className='border-b-2 border-b-yellow-600'>
                <div className='wrapper items-center flex flex-col justify-center space-x-1'>
                    <div className='pt-5 '>
                        <h1><img src={'/src/assets/images/Logo.png'} alt="Logo" /></h1>
                    </div>
                    <div>
                        <h2 className='text-black font-bold'>Where People Shops Groceires</h2>
                    </div>
                </div>
            </div>
            <div className='py-20 wrapper'>
                <div className='flex justify-center items-center  text-white'>
                    <div className='bg-black p-6 rounded-md space-y-4 w-5/12'>
                        <h2 className='font-bold text-2xl flex justify-center items-center'>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p className='ml-1'>Username</p>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    type='email' 
                                    placeholder='Enter your Email Id' 
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                            </div>
                            <div>
                                <p className='ml-1'>Password</p>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type='password' 
                                    placeholder='Enter your password' 
                                    className='border border-gray-600 pl-4 py-1 rounded-lg text-black w-full'
                                />
                                <div className='flex justify-end text-gray-300 mr-2'><small>Forgot Password</small></div>
                            </div>
                            <div className='flex justify-center items-center'><Button text='Login' /></div>
                            <div className='flex justify-center items-center'>
                                <p>Not a Member? <Link to='/auth/create' className='text-green-500 underline'>Signup</Link></p>
                            </div>
                            {message && <div className='text-red-500 text-center text-sm'>{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login