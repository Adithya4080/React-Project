import React from 'react'

function SidebarBottom() {
  return (
    <div className='space-y-5'>
        <div className='border-b border-gray-300'>
            <h3>Filter by Color</h3>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>Green</span>
        </div>
        <div className='border-b border-gray-300'>
            <h3>Filter by Brands</h3>
            <input
                type="checkbox"
                name="category"
            />
            <span className='ml-2'>Fresh</span>
        </div>
        <div className='border-b border-gray-300'>
            <h3>Product Status</h3>
            <div>
                <input
                    type="checkbox"
                    name="category"
                />
                <span className='ml-2'>In Stock</span>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="category"
                />
                <span className='ml-2'>On Sale</span>
            </div>
        </div>
    </div>
  )
}

export default SidebarBottom