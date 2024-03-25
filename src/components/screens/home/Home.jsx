import React from 'react';
import PromptBar from '../../Includes/PromptBar';
import Navbar from '../../Includes/navbar/Navbar';
import Products from '../../Includes/products/Products';
import Sidebar from '../../Includes/sidebar/Sidebar';
import Footer from '../../Includes/footer/Footer';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Grogin</title>
            </Helmet>
            <PromptBar />
            <Navbar />
            <div className='wrapper flex space-x-0  py-10'>
                <Sidebar />
                <Products />                
            </div>
            <Footer />

        </>
    )
}

export default Home