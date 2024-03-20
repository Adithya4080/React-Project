import React from 'react'

function FooterBottom() {
    return (
        <div className='flex justify-between py-10'>
            <div>
                <p className='text-gray-600'>Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.</p>
                <div className='flex space-x-2 items-center w-16 mt-5'>
                    <img src={'/src/assets/images/footer/Visa.png'} alt="Visa" />
                    <img src={'/src/assets/images/footer/Mastercard.png'} alt="Mastercard" />
                    <img src={'/src/assets/images/footer/Paypal.png'} alt="Paypal" />
                    <img src={'/src/assets/images/footer/Skrill.png'} alt="Skrill" />
                    <img src={'/src/assets/images/footer/Klarna.png'} alt="Klarna" />
                </div>
            </div>
            <div className='flex font-semibold space-x-4 underline cursor-pointer'>
                <h4>Terms and Conditions</h4>
                <h4>Privacy Policy</h4>
                <h4>Order Tracking</h4>
            </div>
        </div>
    )
}

export default FooterBottom