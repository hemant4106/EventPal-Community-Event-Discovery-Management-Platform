import React, { useEffect, useRef, useState } from 'react'
import Cards from '../Homepage/Cards';
function CardContainer({filteredarray,normalArray}) {
    const [eventData, setEventData] = useState([]);
    const [currentArray , setCurrentArray]=useState(normalArray)
    const didMountRef = useRef(false);
    const [filterTriggered, setFilterTriggered] = useState(false);
    useEffect(() => {
        const fetchEventData = async () => {
          try {
            const response = await fetch("http://localhost:3000/events");
            const data = await response.json();
            setEventData(data);  // ✅ sets the state once fetched
          } catch (err) {
            console.error("Failed to fetch events:", err);
          } return(eventData)
        };
    fetchEventData();
      }, []);

      useEffect(()=>{  
         if (didMountRef.current) {
    setFilterTriggered(true);
    setCurrentArray(filteredarray);
    didMountRef.current = true;
        }else {
    // First render
    didMountRef.current = true;
    setCurrentArray(normalArray);
  }},[filteredarray,normalArray])
  return (
    <div>
       <div className='flex items-center'> <div className='grid-cols-[auto_auto_auto_auto] gap-y-14 gap-x-17  pl-6 pt-7 w-[76vw] justify-center items-center grid  '>
      {currentArray.length>0?(currentArray.map((item, index) => (<div key={index} className='flex  justify-center items-center h-[330px] w-[240px]'><Cards key={index}  title={item.TitleOfEvent} location={item.Location} isPaid={item.isPaid} genre={item.Genre} Description={item.Description} category={item.Category} date={item.Date} isOnline={item.isOnline} /></div>))):filterTriggered?(<div className='text-center flex justify-center items-center h-[330px] pl-60 w-[76vw]'>No results found for applied filters</div>):null}
    </div>
    </div>

    </div>
  )
}

export default CardContainer
