import React, { useContext } from 'react';
import { FaUser, FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch} from 'react-icons/ci';
import { MdShoppingCart } from "react-icons/md";
import { FilterContext } from '../FilterContext';


function NavbarMiddle() {
    const {searchTerm, handleSearchChange} = useContext(FilterContext)
    return (
        <div className='border border-b-gray-400 sticky top-0 z-10 bg-white'>
            <div className='wrapper py-2 flex justify-between'>
                <div className='flex space-x-2'>
                    <h1>
                        <img src={'src/assets/images/Logo.png'} alt="Logo" />
                    </h1>
                    <div className='flex justify-between text-center pt-1'>
                        <FaLocationDot />
                        <span>Deliver to all</span>
                    </div>
                </div>
                <div className='flex flex-grow items-center bg-gray-100 h-9 px-2 rounded-md mx-4'>
                    <input 
                        type="text" 
                        placeholder="Search for products, categories or brands..." 
                        className='w-full bg-transparent outline-none border-none  placeholder:text-sm text-black' 
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <CiSearch className='text-black text-2xl' />
                </div>
                <div className='flex space-x-4 items-center whitespace-nowrap'>
                    <div className="flex flex-col items-center">
                        <FaUser className="text-2xl" />
                        <h4 className="text-sm">Account</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaRegHeart className="text-2xl" />
                        <h4 className="text-sm">Wishlist</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdShoppingCart className="text-2xl" />
                        <h4 className="text-sm">Your Cart</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMiddle