import React, {useState} from 'react'

const Sidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 30]);

    const handleSliderChange = (event) => {
        const newPrice = parseInt(event.target.value);
        const index = event.target.dataset.index;

        setPriceRange(prevRange => {
            const updatedRange = [...prevRange];
            updatedRange[index] = newPrice;
            return updatedRange;
        });
    };

    return (
        <>
            <div className='border-b border-gray-300'>
                <h3 className='mb-2 font-bold'>Widget price filter</h3>
                <div className='flex justify-between'>
                    <div>
                        <h6 className='text-sm'>Min Price</h6>
                        <input type="button" value={`$${priceRange[0]}`} className='border w-full'/>
                    </div>
                    <span className='space-x-4'>-</span>
                    <div>
                        <h6 className='text-sm'>Max Price</h6>
                        <input type="button" value={`$${priceRange[1]}`} className='border w-full'/>
                    </div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="30"
                    value={priceRange[0]}
                    onChange={handleSliderChange}
                    className="slider h-2"
                    id="price-slider"
                    data-index={0}
                />
                <label htmlFor="price-slider" className="flex text-gray-700 text-sm font-extralight">
                    Price Range: <p className="font-bold">${priceRange[0]} - ${priceRange[1]}</p>
                </label>
            </div>
        </>
    )
}

export default Sidebar