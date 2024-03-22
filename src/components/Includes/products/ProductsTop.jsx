import React, { useContext } from 'react';
import { FilterContext } from '../FilterContext';
import { IoMdCloseCircleOutline } from "react-icons/io";

function ProductsTop() {
    const { selectedCategories, handleCategoryChange } = useContext(FilterContext);

    const handleCategoryClose = (category) => {
        handleCategoryChange(category); // Deselect the category
    };

    return (
        <>
        <div className='relative'>
            <div className='w-full'>
                <img src={'src/assets/images/Banner.png'} alt="Banner" className='w-full' />
            </div>
            <div className="absolute top-0 p-8 space-y-2">
                {/* Display selected categories */}
                <button className='border bg-orange-200 font-semibold text-xs p-1 rounded-md text-amber-950 mb-3'>Only this week</button>
                <h2 className='font-bold text-3xl w-3/4'>Grocery store with different treasures</h2>
                <p className='text-xm text-gray-600 w-3/4'>We have prepared special discounts  for you on grocery products...</p>
                <button className='border bg-white text-black font-bold rounded-xl py-1 px-2'>Shop Now &rarr;</button>
            </div>
        </div>
        <div className="flex flex-wrap space-y-2 space-x-2 mt-5">
            {selectedCategories.map(category => (
                <div key={category} className="bg-green-200 px-2 py-1 flex items-center rounded-lg">
                    <span>{category}</span>
                    <button className="ml-1" onClick={() => handleCategoryClose(category)}>
                        <IoMdCloseCircleOutline  className="h-4 w-4 text-gray-600 hover:text-red-600" />
                    </button>
                </div>
            ))}
        </div>
    </>
    )
}

export default ProductsTop;
