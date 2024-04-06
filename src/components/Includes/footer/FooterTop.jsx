import React, {useState} from 'react';

function FooterTop() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setIsValid(isValidEmail);
    };

    const handleSubmit = () => {
        if (!isValid) {
            alert('Please enter a valid email address');
            setEmail('')
        } else {
            alert('Email submitted:', email);
            setEmail('')
        }
    };
    return (
        <div className='flex flex-wrap space-y-1 justify-between border-b border-b-gray-400 pb-10'>
            <div>
                <h4 className='font-bold text-xl'>Join our newsletter for £10 offs</h4>
                <small className='text-gray-600'>Register now to get latest updates on promotions & <br />coupons. Don't worry, we not spam!</small>
            </div>
            <div className='space-y-2'>
                <div className='flex'>
                    <input 
                        type="text" 
                        placeholder="Enter your email address"
                        className='p-2 rounded-l-lg w-full'
                        value={email}
                        onChange={handleChange}
                    />
                    <button className='border bg-violet-950 text-white border-none p-2 rounded-r-lg' onClick={handleSubmit}>Send</button>
                </div>
                <p className='text-xs text-gray-500'>By subscribing you agree to our <a href='#' style={{ color: 'darkviolet' }}>Terms & Conditions and Privacy & Cookies Policy.</a></p>
            </div>
        </div>
    )
}

export default FooterTop