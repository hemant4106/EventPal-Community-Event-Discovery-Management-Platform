import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function CardHolder() {
  const [eventData, setEventData] = useState([]);

  
  
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
  console.log(eventData)
  return (
    <div className='flex items-center'> <div className=' flex flex-wrap gap-y-14 gap-x-17  pt-5 w-full justify-center items-center   '>
      {eventData.map((item, index) => (<div key={index} className='flex  justify-center items-center h-[330px] w-[15rem]'><Cards key={index}  title={item.TitleOfEvent} location={item.Location} isPaid={item.isPaid} genre={item.Genre} Description={item.Description} category={item.Category} date={item.Date} startTime={item.StartTime} endTime={item.EndTime} isOnline={item.isOnline} organizer={item.Organizer} /></div>))}
    </div>
    </div>

  )
}

export default CardHolder
