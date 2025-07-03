import React, { useState } from 'react'

function TimelineElements({ event }) {
  const [hovered, setHovered] = useState(false);

  function isWithinNext6Days(dateStr) {
    const inputDate = new Date(dateStr);
    inputDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sixDaysFromNow = new Date();
    sixDaysFromNow.setDate(today.getDate() + 6);
    sixDaysFromNow.setHours(0, 0, 0, 0);
    return inputDate >= today && inputDate <= sixDaysFromNow;
  }
  return (
    <div className={`${isWithinNext6Days(event.Date) ? "" : "hidden"} transition-transform  pr-10 delay-300 duration-200`}>
      <div className={`absolute   left-8 w-0.5 transition-normal duration-200  bg-black ${hovered ? "h-[190px] translate-y-[15%]" : "h-[65px] translate-y-[49%]"} translate-x-[650%] z-0`} >
      </div>
      {
        isWithinNext6Days(event.Date) && <li transition-normal duration-200 className="relative mb-5 pl-14">
          <div onMouseEnter={() => (setHovered(true))} onMouseLeave={() => (setHovered(false))} className={`absolute left-[25.5px] top-[7px] w-2.5 h-2.5  rotate-45 border-4 transition-transform duration-200 ${hovered ? "rotate-[-45deg] border-[#ff006e] bg-[#ff006e]" : "bg-black"}`} >
          </div>

          <div onMouseEnter={() => (setHovered(true))} onMouseLeave={() => (setHovered(false))} className={` text-white text-xs inline-block px-3 py-1  shadow-inner transition-colors duration-150 ${hovered ? "bg-[#ff006e]" : "bg-black"}`}>
            {new Date(event.Date).toLocaleString('en-US', {
              month: 'long',
              day: 'numeric'
            })} : {event.TitleOfEvent}
          </div>
          <div >
            <h3 onMouseEnter={() => (setHovered(true))} onMouseLeave={() => (setHovered(false))} className="text-[12px] font-bold">{event.StartTime}-{event.EndTime}</h3>
           <div className=' flex'>
             <h4 onMouseEnter={() => (setHovered(true))} onMouseLeave={() => (setHovered(false))} className=" flex  flex-col w-[100px] font-mono  text-black"><p className='h-[12px] w-full font-semibold'>Event By:</p> <p className=' font-mono '>{event.Organizer}</p></h4>
             </div>
            <div onMouseEnter={() => (setHovered(true))} onMouseLeave={() => (setHovered(false))} className={`rounded  border-black
      bg-amber-100 text-gray-800 text-xs font-mono overflow-hidden transition-normal duration-300 ease-in-out ${hovered ? "w-[100px] border shadow-[2px_2px_0_#000]" : "w-0 h-0"}`}>
              <span className="font-bold block mb-1">Description:</span>
              <p className="leading-tight">{event.Description}</p>
            </div>

          </div>
        </li>
      }
    </div>
  )
}

export default TimelineElements
