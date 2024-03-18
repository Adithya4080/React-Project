import React from 'react';
import SidebarTop from '../sidebar/SidebarTop';
import SidebarMiddle from '../sidebar/SidebarMiddle';
import SidebarBottom from '../sidebar/SidebarBottom';


function Sidebar() {
    return (
        <div className='w-2/12'>
            <SidebarTop />  
            <SidebarMiddle />
            <SidebarBottom />      
        </div>
    )
}

export default Sidebar