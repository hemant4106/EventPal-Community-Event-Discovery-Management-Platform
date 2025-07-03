import React, { use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Sidebar from "./SideBar";
import AddEvent from "./AddEventPage";
import { Link } from "react-router";



function CalendarPage() {
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

  const CalenderEventsData = eventData.map(e => ({
    id: e.id,
    title: e.TitleOfEvent,
    start: `${e.Date}T${e.StartTime}`,
    description: e.Description,
  }));

  return (
    <div className="sm:flex font-mono h-screen overflow-hidden bg-white">
      <Sidebar />

      <div className="flex-grow flex flex-col">
        <div className="flex-grow bg-[#fff1d6] p-4 overflow-hidden">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={CalenderEventsData}
            height="100%"
            eventContent={(arg) => {
  const container = document.createElement("div");
  const root = ReactDOM.createRoot(container);
  root.render(
    <div className="group relative bg-yellow-100 border border-black p-1 text-[10px] rounded shadow-[2px_2px_0_#000] leading-tight max-w-[140px]  hover:bg-yellow-200 transition-all duration-200">
      <div className="font-bold text-black uppercase  truncate">
        {arg.event.title}
      </div>

      <div className="italic text-gray-800 truncate">
        {arg.event.extendedProps.description}
      </div>

      <div className="text-gray-600">
        {new Date(arg.event.start).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

      {/* Hover Popup Description */}
      <div className="absolute z-50 top-full mt-1 left-0  p-2 bg-yellow-50 border border-solid border-black text-[9px] shadow-xl rounded overflow-hidden hidden group-hover:block">
        <div className="font-bold text-black mb-1">Description:</div>
        <div className="text-gray-800 leading-snug">
          {arg.event.extendedProps.description}
        </div>
      </div>
    </div>
  );
  return { domNodes: [container] };
}}  

            dayCellClassNames={() =>
              " border-black border-solid border-2 hover:bg-yellow-100 transition-all duration-150"
            }
            dayHeaderClassNames={() =>
              "bg-[#ff006e] text-black text-xs hover:bg-[#ffa9c3]  px-3 py-1 font-bold border-[2px] transition-all border-black"
            }
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            titleFormat={{ year: "numeric", month: "long" }}
           
            customButtons={{
    customPrev: {
      text: "<",
      click: (arg) => {
        document.querySelector(".fc-prev-button").click();
      },
    },
    customNext: {
      text: ">",
      click: (arg) => {
        document.querySelector(".fc-next-button").click();
      },
    },
    customToday: {
      text: "Today",
      click: (arg) => {
        document.querySelector(".fc-today-button").click();
      },
    },
  }}
  viewDidMount={() => {
    const styleButtons = () => {
      const buttons = document.querySelectorAll(".fc-button");
      const cells = document.querySelectorAll(".fc-daygrid-day-frame")
       cells.forEach((cell)=>{
        Object.assign(cell.style,{
          border: "1px solid #000000 "
        })
       })

      buttons.forEach((btn) => {
        Object.assign(btn.style, {
          backgroundColor: "#ff6700",   // Tailwind yellow-300
          color: "#fffbe6",
          fontWeight: "bold",
          border: "1px solid #000000",
          padding: "4px 12px",
          fontSize: "10px",
          borderRadius: "2px",
          boxShadow: "2px 2px 0 #000",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
        });

        // Optional: hover effect
        btn.addEventListener("mouseenter", () => {
          btn.style.backgroundColor = "#facc15"; // hover yellow-400
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.backgroundColor = "#DE6604"; // reset to yellow-300
        });
      });
    };

    // Delay needed to ensure buttons exist
    setTimeout(styleButtons, 0);
  }}
          />  
        <div className="bg-[#fff1d6] flex items-center justify-center p-3 ">
          <Link to={"/Add Event"}> <button className="hover:bg-amber-100  absolute top-6 left-150" style={{
          "backgroundColor": "#fde047",   // Tailwind yellow-300
          "color": "#000000",
          "fontWeight": "bold",
          "border": "1px solid black",
          "padding": "4px 12px",
          "fontSize": "10px",
          "borderRadius": "2px",
          "boxShadow": "2px 2px 0 #000",
          "textTransform": "uppercase",
          "cursor": "pointer",
          "transition": "all 0.2s ease-in-out"
        }}> Add Event</button></Link>
        </div> 
        </div>

      </div>
    </div>
  );
}

export default CalendarPage;
