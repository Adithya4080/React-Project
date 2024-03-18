import React from 'react'

function SidebarBottom() {
  return (
    <div>
        <div className='border-b border-gray-500'>
            <h3>Filter by Color</h3>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>Green</span>
        </div>
        <div className='border-b border-gray-500'>
            <h3>Filter by Brands</h3>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>Fresh</span>
        </div>
        <div className='border-b border-gray-500'>
            <h3>Product Status</h3>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>In Stock</span>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>On Sale</span>
        </div>
    </div>
  )
}

export default SidebarBottom