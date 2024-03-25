import React from 'react';
import SidebarTop from '../sidebar/SidebarTop';
import SidebarMiddle from '../sidebar/SidebarMiddle';
import SidebarBottom from '../sidebar/SidebarBottom';


function Sidebar() {
    return (
        <div className='hidden md:block'>
            <div className='mr-10'>
                <SidebarTop />  
                <SidebarMiddle />
                <SidebarBottom />    
            </div>  
        </div>
    )
}

export default Sidebar