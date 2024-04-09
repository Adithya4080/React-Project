import React, { useContext } from 'react';
import products from '../../data/data.json';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FilterContext } from '../FilterContext';
import { Link } from 'react-router-dom';
import { MdOutlineGridView } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";


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
        <>
            <div className='bg-[#f3f4f6] py-3 mt-3 flex justify-between px-4 rounded-md max-[768px]:hidden'>
                <div>
                    <p className='text-[#959ba4]'>Showing all {filteredProducts.length} results</p>
                </div>
                <div className='flex justify-between space-x-4'>
                    <p className='text-gray-500'>Sort:<span className='text-black font-medium ml-4'>Sort by latest</span></p>
                    <p className='text-gray-500'>| Show:<span className='text-black font-medium ml-4'>20 Items</span></p>
                    <div className='flex justify-center items-center text-xl space-x-4'>
                        <MdOutlineGridView />
                        <LuLayoutList />
                    </div>
                </div>
            </div>
        {filteredProducts.length === 0 && (
                <p className='font-medium mt-5'>No products in the selected price range.</p>
        )}
        <div className='grid max-[480px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 mt-3 cursor-pointer max-[480px]:space-y-4'>
            {filteredProducts.map((items) =>(
                <div key={items.id} className='border p-2 space-y-2 max-[480px]:w-3/4'>
                    <div className='flex justify-between'>
                        <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>{items.discount}</button>
                        <FaHeart
                            className='text-xl cursor-pointer'
                            style={{ color: wishlist.includes(items.id) ? 'red' : 'gray' }}
                            onClick={() => handleHeartClick(items.id)}
                        />
                    </div>                    
                    <div className='w-full'><img src={items.img} alt={items.name} className='w-full' /></div>
                    <Link key={items.id} to={`/products/${items.id}`}><h3 className='font-semibold text-xm'>{items.title}</h3></Link>
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
                        <del className='text-xm font-medium'>${items.prevPrice}</del>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <CiShoppingCart className='bg-green-500 text-3xl text-white p-1' />
                        <h6 className='text-green-700 font-bold'>{items.stock}</h6>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProductsBottom