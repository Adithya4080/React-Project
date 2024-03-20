import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/data.json';
import Navbar from '../../Includes/navbar/Navbar';
import Footer from '../../Includes/footer/Footer';

function ProductsSinglePage() {
    const { id } = useParams();
    const parseId = parseInt(id);
    const product = products.find(item => item.id === parseId)
    return (
        <div>
            <Navbar />
                <div className='wrapper'>
                    <div className="top flex">
                        <div className="left">
                            <div><img src={product.img} alt={product.name} /></div>
                        </div>
                        <div className="right">
                            <h2>{product.title}</h2>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default ProductsSinglePage