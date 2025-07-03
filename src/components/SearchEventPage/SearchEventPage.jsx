import React from 'react'
import Sidebar from '../SideBar.jsx'
import CardHolder from '../Homepage/CardHolder.jsx'
import SearchPanel from './SearchPanel.jsx'
import CardContainer from './CardContainer.jsx'
function SearchEventPage() {
  return (
    <div className=' sm:flex bg-[#fff1d6] '>
      <Sidebar />
      
          <SearchPanel/>
        
    </div>
  )
}

export default SearchEventPage
//