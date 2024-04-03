import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarBottom() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [menuClicked, setMenuClicked] = useState(false);
    const handleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='border-2 border-b-yellow-500'>
            <div className="wrapper flex justify-between py-3 whitespace-nowrap">
                <div className='hidden sm:block'>              
                    <div className='flex space-x-6 font-medium cursor-pointer'>
                        <Link to='/'>
                            <h4 onClick={handleMenuClick} className={menuClicked ? 'text-[#634c9f]' : 'text-black'}>
                                Home
                            </h4>
                        </Link>
                        <h4>Shop</h4>
                        <h4>Fruits & vegetables</h4>
                        <h4> Beverages</h4>
                        <h4>Blog</h4>
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex space-x-4 font-bold'>
                        <h4>Trending Products</h4>
                        <div className='flex'>
                            <h4 className='text-red-600 mr-2'>Almost Finished</h4>
                            <button type="button" className="text-white bg-gradient-to-r from-red-800 via-red-400 to-orange-400  rounded-lg text-xs  text-center py-1 px-2">Sale</button>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <button onClick={toggleMenu} className='text-xl'>
                        &#9776;
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden fixed top-50% left-0 w-screen h-screen bg-white z-50'>
                    <div className='wrapper flex flex-col space-y-2 font-bold my-4'>
                        <button onClick={closeMenu} className="absolute top-0 right-0 m-4 text-xl">&#x2716;</button>
                        <Link to='/'><h4>Home</h4></Link>
                        <h4>Shop</h4>
                        <h4> Fruits & vegetables</h4>
                        <h4>Beverages</h4>
                        <h4>Blog</h4>
                        <h4>Contact</h4>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavbarBottom