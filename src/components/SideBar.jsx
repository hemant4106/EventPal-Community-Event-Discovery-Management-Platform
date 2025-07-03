import {
  FaThLarge, FaChartBar, FaCalendarAlt, FaEnvelope,
  FaLayerGroup, FaHeadphonesAlt, FaClipboardList, FaSignOutAlt ,FaSearch 
} from 'react-icons/fa';
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router';
import Timeline from './Timeline';

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <FaThLarge /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Search Events", icon: <FaSearch /> },
    { name: "Add Event", icon: <MdAssignmentAdd  /> },
    // { name: "Projects", icon: <FaLayerGroup /> },
    // { name: "Support", icon: <FaHeadphonesAlt /> },
    // { name: "History", icon: <FaClipboardList /> },
  ];

  return (
    <div className="sm:min-h-screen bg-[#FFF7DE] flex sm:flex sm:flex-col text-black sm:border-r-4 sm:border-black font-mono sm:w-[250px] sm:shadow-[4px_0_0_#000]">
      {/* Header */}
      <div className="px-4 py-4 text-xl font-extrabold border-b-4 border-black tracking-wide">
        <span className="inline-block bg-blue-500 text-white px-2 py-[2px] rounded-sm text-sm">🌀</span> EventPal
      </div>

      {/* Menu Label */}
      <div className="text-[10px] uppercase tracking-widest px-4 py-2 font-bold border-b border-black">
        MENU
      </div>

      {/* Menu Items */}
      <div className=" flex  sm:flex sm:flex-col ">
        {menuItems.map((item) => (
          <Link to={`/${item.name}`} key={item.name}>
            <div
              onClick={() => (setActive(item.name))}
              className={`flex items-center gap-3  px-5 py-3 text-sm border-b-2 border-black cursor-pointer font-bold tracking-tight ${
                active == item.name
                  ? "bg-[#ff006e] text-white"
                  : "hover:bg-yellow-300"
              }`}
              style={{ fontFamily: 'monospace' }}
            >
              <span className="text-md">{item.icon}</span>
              <span>{item.name === "Calendar" ? "Calender" : item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Timeline Component */}
      <div className="border-t-4 hidden sm:block border-black h-[62.2vh] bg-[#FFF7DE]  px-2 py-3 overflow-y-scroll text-xs">
        <Timeline />
      </div>

      {/* Logout */}
      {/* <div className="px-6 py-4 text-red-700 font-semibold cursor-pointer hover:underline flex items-center gap-2 border-t-4 border-black bg-yellow-200">
        <FaSignOutAlt />
        <span>Log out</span>
      </div> */}
    </div>
  );
}
