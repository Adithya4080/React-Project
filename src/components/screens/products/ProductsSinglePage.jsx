import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import products from '../../data/data.json';
import Navbar from '../../Includes/navbar/Navbar';
import Footer from '../../Includes/footer/Footer';
import ReactImageMagnify from 'react-image-magnify';
import Button from '../../general/Button';

function ProductsSinglePage() {
    const { id } = useParams();
    const parseId = parseInt(id);
    const product = products.find(item => item.id === parseId);

    const [selectedImage, setSelectedImage] = useState(product.img2);

    const handleImageClick = (img) => {
        setSelectedImage(img)
    }
    return (
        <div>
            <Navbar />
                <div className='wrapper py-10'>
                    <div className="top flex justify-between w-full cursor-pointer">
                        <div className="left w-4/12">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: product.name,
                                    isFluidWidth: true,
                                    src: selectedImage
                                },
                                largeImage: {
                                    src: selectedImage,
                                    width: 700,
                                    height: 700
                                }
                            }} />
                            <div className='flex w-2/12 space-x-4'>
                                <img src={product.img2} alt={product.name} onClick={() => handleImageClick(product.img2)} className='border border-red-500' />
                                <img src={product.img3} alt={product.name} onClick={() => handleImageClick(product.img3)} className='border border-red-500' />
                            </div>
                        </div>
                        <div className="right space-y-4 w-7/12">
                            <h2 className='font-bold text-4xl'>{product.title}</h2>
                            <div className='flex justify-normal items-center border-b border-b-gray-600'>
                                {[...Array(5)].map((_, index) => (
                                    <AiFillStar
                                        key={index}
                                        style={{ color: index < Math.round(product.rating) ? 'gold' : 'gray' }}
                                    />
                                ))}
                                <h6 className='mx-2'>{product.review}</h6>
                                <span className='uppercase'>| <span className='text-gray-600'>sku:</span>e7f8g9ho</span>
                            </div>
                            <div>
                                <p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent tacitisociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</p>
                            </div>
                            <div className='flex items-center space-x-3'>                    
                                <h3 className='font-bold text-4xl text-red-500'>${product.newPrice}</h3>
                                <del className='text-xl font-bold'>${product.prevPrice}</del>
                            </div>
                            <div>
                                <Button text='Order on WhatsApp' className='font-bold' />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default ProductsSinglePage