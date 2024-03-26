import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { IoCart, IoShieldCheckmarkOutline, IoHeartOutline, IoShareOutline, IoGitCompare } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";
import products from '../../data/data.json';
import Navbar from '../../Includes/navbar/Navbar';
import Footer from '../../Includes/footer/Footer';
import ReactImageMagnify from 'react-image-magnify';
import Button from '../../general/Button';
import RelatedProducts from '../../Includes/RelatedProducts';
import { Helmet } from 'react-helmet';

function ProductsSinglePage() {
    const { id } = useParams();
    const parseId = parseInt(id);
    const product = products.find(item => item.id === parseId);

    // Images
    const [selectedImage, setSelectedImage] = useState(product.img2);
    const handleImageClick = (img) => {
        setSelectedImage(img)
    }

    // Timer
    const [time, setTime] = useState({ days: 81, hours: 6, minutes: 50, seconds: 2 });
    useEffect(() => {
        const interval = setInterval(() => {
          if (time.seconds > 0) {
            setTime(prev => ({ ...prev, seconds: prev.seconds - 1 }));
          } else if (time.minutes > 0) {
            setTime(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }));
          } else if (time.hours > 0) {
            setTime(prev => ({ ...prev, hours: prev.hours -1 , minutes :59 , seconds :59}));
          } else if (time.days >0){
            setTime(prev=>({...prev,days : prev.days-1,hours :23 ,minutes :59 ,seconds :59}))
          }
        },1000);
        return () => clearInterval(interval);
    },[time]);

    // Counter
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        };
    };

    return (
        <div>
            <Helmet>
                <title>{product.title} | Grogin</title>
            </Helmet>
            <Navbar />
                <div className='wrapper py-10'>
                    <div className="top flex justify-between w-full flex-col md:flex-row cursor-pointer">
                        <div className="left w-full md:w-5/12">
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
                        <div className="right space-y-4 w-full md:w-7/12">
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
                            <div className="flex items-center bg-orange-300 p-4 rounded-lg">
                                <span className="text-red-500 font-bold">Special Offer :</span>
                                <div className="flex items-center ml-4">
                                    {Object.keys(time).map((unit) => (
                                    <div key={unit} className="flex flex-col items-center mx-2">
                                        <span className="bg-white p-2 rounded-lg text-orange-800 text-xl font-bold">{String(time[unit]).padStart(2,'0')}</span>
                                    </div>
                                    ))}
                                </div>
                                <span className="text-gray-500 font-bold ml-4">Remains until the end of the offer.</span>
                            </div>
                            <div className='flex space-x-2'>
                                <div className='flex items-center border-2 rounded-sm'>
                                    <button onClick={decrement} className=" px-4 py-1 rounded-l-md">-</button>
                                    <div className=" py-1 px-2 text-center">{count}</div>
                                    <button onClick={increment} className=" px-4 py-1 rounded-r-md">+</button>
                                </div>
                                <div>
                                    <Button text={<><IoCart className='mr-2' />Add To Cart</>} className='flex items-center' />
                                </div>
                                <div>
                                    <Button text={<><IoCart className='mr-2' />Buy Now</>} className='flex items-center bg-black' />
                                </div>
                            </div>
                            <div className='border rounded-md'>
                                <div className='flex space-x-10 items-center py-1 px-4 border-b'>
                                    <FiCreditCard className='text-2xl font-bold'/>
                                    <p className='text-gray-500'><span className='font-bold'>Payment.</span> Payment upon receipt of goods, Payment by card in the department, Google Pay,Online card, -5% discount in case of payment</p>
                                </div>
                                <div className='flex space-x-9 items-center py-1 px-4'>
                                    <IoShieldCheckmarkOutline className='text-2xl font-bold'/>
                                    <p className='text-gray-500'><span className='font-bold'>Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                                </div>
                            </div>
                            <div className='flex space-x-6 cursor-pointer'>
                                <div className='flex items-center space-x-2'>
                                    <IoHeartOutline className='border p-1 text-3xl' />
                                    <small className='font-bold'>Add to Wishlist</small>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <IoShareOutline  className='border p-1 text-3xl' />
                                    <small className='font-bold'>Share this Product</small>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <IoGitCompare className='border p-1 text-3xl' />
                                    <small className='font-bold'>Compare</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom py-10">
                        <div className='space-y-5'>
                            <h4 className='font-bold border-b border-b-gray-300'>Description</h4>
                            <p className=''>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                            <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra Maecenas lacus odio, feugiat eu nunc sit amet,maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam utarcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sedegestas purus commodovel.</p>
                        </div>
                    </div>
                    <div>
                        <RelatedProducts category={product.category} wishlist={[]} addToWishlist={() => {}} removeFromWishlist={() => {}} />
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default ProductsSinglePage