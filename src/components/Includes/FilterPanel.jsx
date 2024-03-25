import React from 'react';
import SidebarTop from './sidebar/SidebarTop';
import { IoMdCloseCircleOutline } from "react-icons/io";
import SidebarMiddle from './sidebar/SidebarMiddle';

function FilterPanel({ isOpen, toggleFilterPanel }) {
    return (
        <div className={`md:hidden fixed inset-0 z-10 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='wrapper'>
            <div className="flex justify-between p-4 bg-gray-200">
                    <h2 className="text-lg font-bold">Filters</h2>
                    <button onClick={toggleFilterPanel}>
                        <IoMdCloseCircleOutline className="h-6 w-6 text-gray-500 hover:text-red-600" />
                    </button>
                </div>
                <div className="overflow-y-auto px-4 py-8">
                    <SidebarTop />
                    <SidebarMiddle />
                </div>
            </div>
        </div>
    );
}

export default FilterPanel;
