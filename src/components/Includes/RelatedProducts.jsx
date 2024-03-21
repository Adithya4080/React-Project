import React, {useState, useEffect} from 'react';
import products from '../data/data.json'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function RelatedProducts({ category, wishlist, addToWishlist, removeFromWishlist}) {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const filterProducts = products.filter(item => item.category === category)
        const subsetRelatedProducts =filterProducts.slice(0, 6);
        setRelatedProducts(subsetRelatedProducts)
    }, [category])

    const handleHeartClick = (productId) => {
        const isWishlistItem = wishlist.includes(productId);
        if (isWishlistItem) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    return (
        <div className='space-y-5'>
            <h4 className='font-bold'>Related Products</h4>
            <div className='grid grid-cols-6 gap-2 cursor-pointer'>
                {relatedProducts.map((item) => (
                    <div key={item.id} className='border p-2 space-y-2'>
                        <div className='flex justify-between'>
                            <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>{item.discount}</button>
                            <FaHeart
                                className='text-xl cursor-pointer'
                                style={{ color: wishlist.includes(item.id) ? 'red' : 'gray' }}
                                onClick={() => handleHeartClick(item.id)}
                            />
                        </div>                    
                        <div className='w-full'><img src={item.img} alt={item.name} className='w-full' /></div>
                        <Link key={item.id} to={`/products/${item.id}`}><h3 className='font-bold text-xm'>{item.title}</h3></Link>
                        <div className='flex justify-normal item-center'>
                            {[...Array(5)].map((_, index) => (
                                <AiFillStar
                                    key={index}
                                    style={{ color: index < Math.round(item.rating) ? 'gold' : 'gray' }}
                                />
                            ))}
                            <h6 className='ml-2'>{item.review}</h6>
                        </div>
                        <div className='flex item-center space-x-3'>                    
                            <h3 className='font-bold text-xl text-red-500'>${item.newPrice}</h3>
                            <del className='text-xm font-bold'>${item.prevPrice}</del>
                        </div>
                        <div className='flex item-center space-x-5'>
                            <CiShoppingCart className='bg-green-500 text-3xl text-white p-1' />
                            <h6 className='text-green-700 font-bold'>{item.stock}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts