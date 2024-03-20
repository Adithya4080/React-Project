import React, { useContext } from 'react';
import products from '../../data/data.json';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FilterContext } from '../FilterContext';
import { Link } from 'react-router-dom';


function ProductsBottom() {
    const { searchTerm, priceRange, selectedCategories, wishlist, addToWishlist, removeFromWishlist } = useContext(FilterContext)

    const filteredProducts = products.filter(item =>
        (searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (item.newPrice >= priceRange[0] && item.newPrice <= priceRange[1]) &&
        (selectedCategories.length === 0 || selectedCategories.includes(item.category))
    );

    const handleHeartClick = (productId) => {
        const isWishlistItem = wishlist.includes(productId);
        if (isWishlistItem) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    return (
        <div className='grid grid-cols-5 mt-10 cursor-pointer'>
            {filteredProducts.map((items) =>(
                <div key={items.id} className='border p-2 space-y-2'>
                    <div className='flex justify-between'>
                        <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>{items.discount}</button>
                        <FaHeart
                            className='text-xl cursor-pointer'
                            style={{ color: wishlist.includes(items.id) ? 'red' : 'gray' }}
                            onClick={() => handleHeartClick(items.id)}
                        />
                    </div>                    
                    <div className='w-full'><img src={items.img} alt={items.name} className='w-full' /></div>
                    <Link key={items.id} to={`/products/${items.id}`}><h3 className='font-bold text-xm'>{items.title}</h3></Link>
                    <div className='flex justify-normal items-center'>
                        {[...Array(5)].map((_, index) => (
                            <AiFillStar
                                key={index}
                                style={{ color: index < Math.round(items.rating) ? 'gold' : 'gray' }}
                            />
                        ))}
                        <h6 className='ml-2'>{items.review}</h6>
                    </div>
                    <div className='flex items-center space-x-3'>                    
                        <h3 className='font-bold text-xl text-red-500'>${items.newPrice}</h3>
                        <del className='text-xm font-bold'>${items.prevPrice}</del>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <CiShoppingCart className='bg-green-500 text-3xl text-white p-1' />
                        <h6 className='text-green-700 font-bold'>{items.stock}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsBottom