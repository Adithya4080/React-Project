import React, { useContext } from 'react';
import products from '../../data/data.json';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FilterContext } from '../FilterContext';

function ProductsBottom() {
    const { searchTerm, priceRange, selectedCategories } = useContext(FilterContext)

    const filteredProducts = products.filter(item =>
        (searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (item.newPrice >= priceRange[0] && item.newPrice <= priceRange[1]) &&
        (selectedCategories.length === 0 || selectedCategories.includes(item.category))
    );
    return (
        <div className='grid grid-cols-5 mt-10'>
            {filteredProducts.map((items) =>(
                <div key={items.id} className='border p-2 space-y-2'>
                    <div className='flex justify-between'>
                        <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>{items.discount}</button>
                        <CiHeart className='text-xl' />
                    </div>                    
                    <div className='w-full'><img src={items.img} alt={items.name} className='w-full' /></div>
                    <h3 className='font-bold text-xm'>{items.title}</h3>
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