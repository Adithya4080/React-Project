import React from 'react';
import PromptBar from '../../Includes/PromptBar';
import Navbar from '../../Includes/navbar/Navbar';
import Products from '../../Includes/products/Products';
import Sidebar from '../../Includes/sidebar/Sidebar';

function Home() {
    return (
        <>
            <PromptBar />
            <Navbar />
            <div className='wrapper flex space-x-10 py-10'>
                <Sidebar />
                <Products />                
            </div>

        </>
    )
}

export default Home