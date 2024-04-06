import React, {useContext} from 'react';
import { FilterContext } from '../FilterContext';
// import ReactSlider from 'react-slider';
import Slider from 'react-slider';

const Sidebar = () => {
    const { priceRange, handlePriceRangeChange } = useContext(FilterContext);

    const handleSliderChange = (newPriceRange) => {
        handlePriceRangeChange(newPriceRange);
    };

    return (
        <>
            <div className='border-b border-gray-300 pb-2 w-full space-y-4'>
                <h3 className='mb-2 font-semibold'>Widget price filter</h3>
                <div className='flex space-x-2'>
                    <div>
                        <h6 className='text-sm'>Min Price</h6>
                        <input type="button" value={`${priceRange[0]}`} className='border w-full'/>
                    </div>
                    <span className='space-x-1'>-</span>
                    <div>
                        <h6 className='text-sm'>Max Price</h6>
                        <input type="button" value={`${priceRange[1]}`} className='border w-full'/>
                    </div>
                </div>
                <Slider
                    className="slider"
                    value={priceRange}
                    onChange={handleSliderChange}
                    min={0}
                    max={30}
                />
                <label htmlFor="price-slider" className="flex text-gray-700 text-sm font-extralight">
                    Price: <p className="font-bold ml-4">${priceRange[0]} - ${priceRange[1]}</p>
                </label>
            </div>
        </>
    )
}

export default Sidebar