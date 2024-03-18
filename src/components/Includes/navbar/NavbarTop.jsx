import React from 'react'

    function NavbarTop() {
    return (
        <div className='border border-b-gray-500'>
        <div className='wrapper flex justify-between text-gray-500 py-1'>
            <div className='flex space-x-4'>
                <h5>About Us</h5>
                <h5>My Account</h5>
                <h5>Wishlist</h5>
                <span>|</span>
                <h6 className='text-md'>We deliver to you every day from <span className='text-orange-500'>7:00 to 23:00</span></h6>
            </div>
            <div className='flex space-x-4 '>
                <h5>English</h5>
                <h5>USD</h5>
                <h5>Order Tracking</h5>
            </div>
        </div>
        </div>
    )
}

export default NavbarTop