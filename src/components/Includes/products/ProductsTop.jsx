import React, { useState, useContext } from 'react';
import { FilterContext } from '../FilterContext';
import { IoClose } from "react-icons/io5";
import FilterPanel from '../FilterPanel';
import { MdOutlineGridView } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";

function ProductsTop({}) {
    const { selectedCategories, handleCategoryChange } = useContext(FilterContext);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    const handleCategoryClose = (category) => {
        handleCategoryChange(category); 
    };

    const toggleFilterPanel = () => {
        setIsFilterPanelOpen(!isFilterPanelOpen);
    };


    return (
        <>
        <div>
            <button onClick={toggleFilterPanel} className='md:hidden border border-blackc mb-5'>Filters</button>
        </div>
        <FilterPanel isOpen={isFilterPanelOpen} toggleFilterPanel={toggleFilterPanel} />
        <div className="flex flex-wrap space-y-2 space-x-2 mb-5">
            {selectedCategories.map(category => (
                <div key={category} className=" px-2 py-1 flex items-center rounded-lg">
                    
                    <button className="ml-1" onClick={() => handleCategoryClose(category)}>
                        <IoClose  className="h-4 w-4 text-gray-600 hover:text-red-600" />
                    </button>
                    <span>{category}</span>
                </div>
            ))}
        </div>
        <div style={{ backgroundImage: 'url(src/assets/images/Banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="p-8 space-y-2">
                <button className='border bg-orange-200 font-semibold text-xs p-1 rounded-md text-amber-950 mb-3'>Only this week</button>
                <h2 className='font-bold text-3xl w-3/4'>Grocery store with different treasures</h2>
                <p className='text-xm text-gray-600 w-3/4'>We have prepared special discounts  for you on grocery products...</p>
                <button className='border bg-white text-black font-bold rounded-xl py-1 px-2'>Shop Now &rarr;</button>
            </div>
        </div>
        <div className='bg-gray-200 py-3 mt-3 flex justify-between px-4 rounded-md'>
            <div>
                <p>Showing all 16 results</p>
            </div>
            <div className='flex justify-between space-x-4'>
                <p className='text-gray-500'>Sort:<span className='text-black font-semibold ml-4'>Sort by latest</span></p>
                <p className='text-gray-500'>| Show:<span className='text-black font-semibold ml-4'>20 Items</span></p>
                <div className='flex justify-center items-center text-xl space-x-4'>
                    <MdOutlineGridView />
                    <LuLayoutList />
                </div>
            </div>
        </div>

    </>
    )
}

export default ProductsTop;
