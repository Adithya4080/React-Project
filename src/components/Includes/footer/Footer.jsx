import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

function Footer() {
    return (
        <div className='bg-slate-300 py-10'>
            <div className="wrapper">
                <FooterTop />
                <FooterMiddle />
                <FooterBottom />
            </div>
        </div>
    )
}

export default Footer