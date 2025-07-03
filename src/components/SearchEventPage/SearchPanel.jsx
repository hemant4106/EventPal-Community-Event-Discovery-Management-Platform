import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import labelValue from '../../constants/label';
import genreOptions from '../../constants/genreoptions';
import CardContainer from './CardContainer';
function SearchPanel() {


  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        const data = await response.json();
        setEventData(data);  // ✅ sets the state once fetched
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } return (eventData)
    };

    fetchEventData();
  }, []);





  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [filteredEvents, setFilteredEvents] = useState(eventData);
  const onSubmit = (data) => {
    const filtered = eventData.filter(event => {
      const searchText = data.TitleOfEvent?.toLowerCase().trim() || "";
      const searchLocation = data.Location?.toLowerCase().trim() || "";
      const oragniser = data.Organizer?.toLowerCase().trim() || "";
      const startTime = data.StartTime?.toLowerCase().trim() || "";
      const date = data.Date?.toLowerCase().trim() || "";
      return (
        (!startTime || event.StartTime.toLowerCase().includes(startTime)) &&
        (!date || event.Date.toLowerCase().includes(date)) &&
        (!searchText || event.TitleOfEvent.toLowerCase().includes(searchText)) &&
        (!oragniser || event.Organizer.toLowerCase().includes(oragniser)) &&
        (!searchLocation || event.Location.toLowerCase().includes(searchLocation)) &&
        (!data.isPaid || event.isPaid === data.isPaid) &&
        (!data.Genre || event.Genre === data.Genre) &&
        (!data.Category || event.Category === data.Category) &&
        (!data.isOnline || event.isOnline === data.isOnline)
      );
    });
    setFilteredEvents(filtered);
  };

  console.log(filteredEvents)


  return (
    <div>
      <div className='h-[310px]'>
        <form onSubmit={handleSubmit(onSubmit)} className='grid sm:ml-40 ml-5 mt-3 sm:grid-cols-[auto_auto_auto] grid-cols-[auto_auto] w-[60vw] bg-[#fffbe6] shadow-[4px_4px_0_#000] rounded gap-y-3 gap-x-10 pt-6  sm:p-6   z-0'>
          {labelValue.map((item, index) => (
            <div> {index < 2 && <span className='flex flex-col'>
              <label className='text-[1.7vh] font-bold '>{item.textVal + ":"}</label>
              <input type={item.type} {...register(`${item.registereddAs}`, { maxLength: 20 })} className='border-2 border-black  bg-white' placeholder={item.placeholder} />
            </span>}
              {
                index == 2 &&
                <span className='flex flex-col'>
                  <label className='text-[1.7vh] font-bold ' >{"Filter by Cost: "}</label>
                  <select {...register("isPaid")} className='border-2 border-black  bg-white' >
                    <option disabled selected value="" >Select Paid/Free</option>
                    <option value="Paid">Paid</option>
                    <option value="Free">Free</option>
                  </select>
                </span>
              }
              {
                index == 3 &&
                <span className='flex flex-col'>
                  <label className='text-[1.7vh] font-bold ' >{"Filter by Genre: "}</label>
                  <select onChangeCapture={(e) => { setgenre(e.target.value); console.log(e.target.value) }}  {...register("Genre")} className='border-2 border-black  bg-white'
                  >
                    <option disabled selected value="">Select Genre</option>
                    {genreOptions.map((item) => (
                      <option value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </span>
              }
              {
                index == 4 &&
                <span className='flex flex-col'>
                  <label className='text-[1.7vh] font-bold '>{"Filter by category: "}</label>
                  <select  {...register("Category")} className='border-2 border-black  bg-white'>
                    <option selected disabled value="" >Select Category</option>
                    {genreOptions.map((item, index) => (
                      item.options.map((i) => (
                        <option value={i.value}>{i.label}</option>
                      ))
                    ))}
                  </select>
                </span>
              }
            </div>


          ))}
          <span className='flex flex-col'>
            <label className='text-[1.7vh] font-bold ' >Online Or Offline?:</label>
            <select {...register("isOnline")} className='border-2 border-black  bg-white'>
              <option disabled selected value="" >Select Online/Offline</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </span>
          <span className='flex flex-col'>
            <label className='text-[1.7vh] font-bold '> Filter by Date: </label>
            <input type='date' {...register("Date")} className='border-2 border-black  bg-white' />
          </span>



          <span className='flex flex-col'>
            <label className='text-[1.7vh] font-bold '>Filter Organized By:</label>
            <input type='text' placeholder='Enter organizer name' {...register("Organizer", { maxLength: "15" })} className='border-2 border-black  bg-white' />
          </span>

          <span className='flex flex-col'>
            <label className='text-[1.7vh] font-bold ' > Filter by Start time :</label>
            <input type='time' {...register("StartTime")} className='border-2 border-black  bg-white' />
          </span>
          <button type='submit' className='border-2 shadow-[2px_2px_0_#000] hover:bg-[#ff228c] relative left-75.5 bg-[#ff006e]  h-[40.675px] border-black'>Show Results</button>

        </form>
      </div>

      <div className='w-full h-[54vh] ml-7 overflow-y-scroll pb-7 border-[4px] border-black'>
        <CardContainer filteredarray={filteredEvents} normalArray={eventData} />
      </div>

    </div>
  )
}

export default SearchPanel
