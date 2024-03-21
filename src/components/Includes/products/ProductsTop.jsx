import React from 'react'

function ProductsTop() {
    return (
        <div className='relative'>
            <div className='w-full'>
                <img src={'src/assets/images/Banner.png'} alt="Banner" className='w-full' />
            </div>
            <div className="absolute top-0 p-8 space-y-2">
                <button className='border bg-orange-200 font-semibold text-xs p-1 rounded-md text-amber-950 mb-3'>Only this week</button>
                <h2 className='font-bold text-3xl w-3/4'>Grocery store with different treasures</h2>
                <p className='text-xm text-gray-600 w-3/4'>We have prepared special discounts  for you on grocery products...</p>
                <button className='border bg-white text-black font-bold rounded-xl py-1 px-2'>Shop Now &rarr;</button>
            </div>
        </div>
    )
}

export default ProductsTop