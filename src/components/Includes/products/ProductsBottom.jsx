import React from 'react';
import products from '../../data/data.json';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart, CiHeart } from "react-icons/ci";

function ProductsBottom() {
    return (
        <div className='grid grid-cols-5 mt-10'>
            {products.map((items) =>(
                <div key={items.id} className='border p-2 space-y-2'>
                    <div className='flex justify-between'>
                        <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>{items.discount}</button>
                        <CiHeart className='text-xl' />
                    </div>                    
                    <div className='w-full'><img src={items.img} alt={items.name} className='w-full' /></div>
                    <h3 className='font-bold'>{items.title}</h3>
                    <div className='flex justify-normal items-center'>
                        {[...Array(5)].map((_, index) => (
                            <AiFillStar
                                key={index}
                                style={{ color: index < Math.round(items.rating) ? 'gold' : 'gray' }}
                            />
                        ))}
                        <h6 className='ml-2'>{items.review}</h6>
                    </div>
                    
                    <h3>${items.newPrice}</h3>
                    <del>${items.prevPrice}</del>
                    <CiShoppingCart />
                    <h6>{items.stock}</h6>
                </div>
            ))}
        </div>
    )
}

export default ProductsBottom