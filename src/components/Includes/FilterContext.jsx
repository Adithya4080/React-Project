import React, {useState} from 'react';

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, 30]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    }

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
    };

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const addToWishlist = (productId) => {
        if (!wishlist.includes(productId)) {
            setWishlist([...wishlist, productId]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter(id => id !== productId));
    };
    
    return (
        <FilterContext.Provider
            value={{
                searchTerm,
                handleSearchChange,
                priceRange,
                handlePriceRangeChange,
                selectedCategories,
                handleCategoryChange,
                wishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}
