import React from 'react';
import { MdPhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";

function FooterMiddle() {
    return (
        <div className='py-10 flex justify-between border-b border-b-gray-400'>
            <div className='space-y-4'>
                <h4 className='font-bold'>Do You Need Help ?</h4>
                <p className='text-xm text-gray-600'>Autoseligen syr. Nek diarask fröbomba. Nör <br /> antipol kynoda nynat. Pressa fåmoska.</p>
                <div className='flex items-center space-x-4'>
                    <MdPhoneInTalk className='text-3xl' />
                    <div>
                        <p className='text-xs text-gray-700'>Monday-Friday: 08am-9pm</p>
                        <h4 className='font-bold'>0 800 300-353</h4>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <CiMail className='text-3xl' />
                    <div>
                        <p className='text-xs text-gray-700'>Need help with your order?</p>
                        <h4 className='font-bold'>info@example.com</h4>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold'>Make Money with Us</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li>Sell on Grodin</li>
                    <li>Sell Your Services on Grogin</li>
                    <li>Sell on Grogin Business</li>
                    <li>Sell Your Apps on Grogin</li>
                    <li>Became an Affliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Become an Blowwe Vendor</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Let Us Help You</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li>Accessibility Statement</li>
                    <li>Your Orders</li>
                    <li>Returns & Replacements</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Cookie Settings</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Get to Know Us</h4>
                <ul className='text-xs text-gray-600 space-y-2'>
                    <li>Careers for Grodin</li>
                    <li>About Grogin</li>
                    <li>Investor Relations</li>
                    <li>Grogin Devices</li>
                    <li>Customer reviews</li>
                    <li>Social Responsibility</li>
                    <li>Store Locations</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='font-bold space-y-2'>Download our app</h4>
                <div className='flex'>
                    <img src={'/src/assets/images/Google Play.png'} alt="Google Play" />
                    <small className='ml-2 text-gray-600'>Download App Get <br /> - 10% Discount</small>
                </div>
                <div className='flex'>
                    <img src={'/src/assets/images/Apple Store.png'} alt="Apple Store" />
                    <small className='ml-2 text-gray-600'>Download App Get <br /> - 20% Discount</small>
                </div>
                <div className='space-y-2'>
                    <h6 className='text-xm text-gray-600'>Follow us on social media:</h6>
                    <div className='flex space-x-3'>
                        <img src={'/src/assets/images/Social/Facebook.png'} alt="Facebook" />
                        <img src={'/src/assets/images/Social/Twitter.png'} alt="Twitter" />
                        <img src={'/src/assets/images/Social/Instagram.png'} alt="Instagram" />
                        <img src={'/src/assets/images/Social/LinkedIn.png'} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle