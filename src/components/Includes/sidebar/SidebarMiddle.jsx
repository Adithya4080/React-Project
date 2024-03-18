import React, {useState} from 'react'

const SidebarMiddle = () => {
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
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };

    return (
        <div className='my-5 border-b border-gray-300'>
            <h3 className='font-bold'>Product Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category} className="mb-2">
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