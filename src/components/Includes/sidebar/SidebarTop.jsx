import React, {useContext} from 'react';
import { FilterContext } from '../FilterContext';
import ReactSlider from 'react-slider'

const Sidebar = () => {
    const { priceRange, handlePriceRangeChange } = useContext(FilterContext);

    const handleSliderChange = (newPriceRange) => {
        handlePriceRangeChange(newPriceRange);
    };

    return (
        <>
            <div className='border-b border-gray-300 pb-2 w-full'>
                <h3 className='mb-2 font-bold'>Widget price filter</h3>
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
                <ReactSlider
                    className="slider pt-5"
                    thumbClassName="thumb bg-black rounded-full text-none text-xs"
                    trackClassName="track bg-darkgrey w-full"
                    value={priceRange}
                    onChange={handleSliderChange}
                    min={0}
                    max={30}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={0}
                />
                {/* <input
                    type="range"
                    min="0"
                    max="30"
                    value={priceRange[0]}
                    onChange={handleSliderChange}
                    data-index={0}
                /> */}
                <label htmlFor="price-slider" className="flex text-gray-700 text-sm font-extralight pt-10">
                    Price: <p className="font-bold ml-4">${priceRange[0]} - ${priceRange[1]}</p>
                </label>
            </div>
        </>
    )
}

export default Sidebar