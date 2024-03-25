import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarBottom() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border-2 border-b-yellow-500'>
            <div className="wrapper flex justify-between py-2 font-bold whitespace-nowrap">
                <div className='hidden sm:block'>              
                    <div className='flex space-x-4'>
                        <Link to='/'><h4>Home</h4></Link>
                        <h4>Shop</h4>
                        <h4> Fruits & vegetables</h4>
                        <h4>Beverages</h4>
                        <h4>Blog</h4>
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex space-x-4'>
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
                <div className='md:hidden'>
                    <div className='wrapper flex flex-col space-y-2 font-bold my-4'>
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