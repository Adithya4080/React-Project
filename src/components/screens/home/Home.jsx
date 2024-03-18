import React from 'react';
import PromptBar from '../../Includes/PromptBar';
import Navbar from '../../Includes/navbar/Navbar';
import Products from '../../Includes/Products';

function Home() {
    return (
        <>
            <PromptBar />
            <Navbar />
            <Products />
        </>
    )
}

export default Home