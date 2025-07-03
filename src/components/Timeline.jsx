import { use, useEffect, useState } from "react";
import TimelineElements from "./TimelineElements";
import { Typewriter } from 'react-simple-typewriter'
export default function Timeline() {
  const [eventData, setEventData] = useState([]);
  


  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        const data = await response.json();
        setEventData(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEventData();
  }, []);




  return (
    <div >
     <h1 className="text-left pl-2 h-[40px] text-[16px] bg-[#fff1d6]  border-black font-mono shadow-[2px_1.5px_0_#000] rounded-sm px-2 uppercase tracking-wider">
  <Typewriter
    words={['Upcoming events in next week...']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h1>
    <ul className="relative w-[220px]  px-4 py-7">
     {eventData.sort((a, b) => new Date(a.Date) - new Date(b.Date)).map((event,index)=>(<TimelineElements key={event.id} event={event}/>))}
    </ul>
    </div>
  );
}
