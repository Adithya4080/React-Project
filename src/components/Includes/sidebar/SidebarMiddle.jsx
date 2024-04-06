import React, {useContext} from 'react';
import { FilterContext } from '../FilterContext';

const categories = [
    'Fruits',
    'Vegetables',
    'Baby & Pregnancy',
    'Beverages',
    'Meats & Seafood',
    'Biscuits & Snacks',
    'Breads & Bakery',
    'Breakfast & Dairy',
    'Frozen Foods',
    'Grocery & Staples',
    'Healthcare',
    'Household Needs'
]

const SidebarMiddle = () => {
    const { selectedCategories, handleCategoryChange } = useContext(FilterContext);

    return (
        <div className='pt-3 pb-5 border-b border-gray-300'>
            <h3 className='font-semibold mb-2'>Product Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category} className="mb-2 whitespace-nowrap">
                    <label className="inline-flex items-center">
                        <input
                        type="checkbox"
                        className="form-checkbox"
                        name="category"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        />
                        <span className={`ml-2 ${selectedCategories.includes(category) ? "font-semibold" : ""}`}>{category}</span>
                    </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarMiddle