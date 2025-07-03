import React from 'react'
import Sidebar from '../SideBar'
import AddEvent from '../AddEventPage'
import CardHolder from './CardHolder'
function HomePage() {
    
    
    
    return (
        <div className=' sm:flex  bg-[#fff1d6] h-[100vh]'>
           <div className=' sm:block '>
            <Sidebar />
            </div> 
           <div className='w-full overflow-y-scroll flex flex-col border-[4px] border-black'>
             <p className='font-mono justify-center items-center flex'>All Events</p>  
            <CardHolder/>
            </div>
        </div>
    )
}

export default HomePage
