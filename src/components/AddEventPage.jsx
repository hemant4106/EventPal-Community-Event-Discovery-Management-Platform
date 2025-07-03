import React, { useState } from 'react'
import genreOptions from '../constants/genreoptions'
import labelValue from '../constants/label'
import { useForm } from 'react-hook-form'
import Sidebar from './SideBar'

function AddEvent() {
    const [toggle, setToggle] = useState(true)
    const [genre, setgenre] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
 
    const onSubmit = async (formData) => {
        const response = await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Event Submitted Successfully ✅");
            reset();
        } else {
            alert("Failed to submit  Event❌");
        }
    };

    return (
         <div className='bg-[#fff1d6] h-[100vh] flex'>
          
             <div>
                <Sidebar/>
                </div>         
            <div className={`${toggle?"h-[300px]":"h-[25px]"} w-full flex flex-col transition-normal ease-in-out duration-300   `}>
    
                <button onClick={() => (setToggle(!toggle))} className='bg-[#ff006e] w-[30vh] px-4 relative left-120 top-2 py-2 text-sm border-2 border-black shadow-[2px_2px_0_#000] mb-4'>
                    {toggle ? "Hide Event Form" : "Add New Event"}
                </button>

                <div className={`${toggle ? "scale-100" : "scale-0"}  h-[1000px] relative flex  transition-normal ease-in-out duration-300  justify-center right-0 z-10 `}>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid scale-125 grid-cols-[auto_auto_auto] w-[60vw] bg-[#fffbe6] shadow-[4px_4px_0_#000] rounded gap-y-3 gap-x-10 pt-6  p-6 justify-center top-20 absolute z-0'>
                        {labelValue.map((item, index) => (
                            <div> {index < 2 && <span className='flex flex-col'>
                                <label className='text-[1.7vh] font-bold ' >{item.textVal + ":"}</label>
                                <input type={item.type} {...register(`${item.registereddAs}`, { required: true, maxLength: 20 })} className='border-2 w-[280px] border-black px-2 py-1 bg-white' placeholder={item.placeholder} />
                            </span>}
                                {
                                    index == 2 &&
                                    <span className='flex flex-col'>
                                        <label className='text-[1.7vh] font-bold' >{item.textVal + ":"}</label>
                                        <select {...register("isPaid", { required: "Please select an option" })} className='border-2 border-black px-2 py-1 w-[200px] bg-white ' >
                                            <option disabled selected value="" >Select Paid/Free</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Free">Free</option>
                                        </select>
                                    </span>
                                }
                                {
                                    index == 3 &&
                                    <span className='flex flex-col'>
                                        <label className='text-[1.7vh] font-bold' >{item.textVal + ":"}</label>
                                        <select onChangeCapture={(e) => {setgenre(e.target.value); console.log(e.target.value)}}  {...register("Genre", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'
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
                                        <label className='text-[1.7vh] font-bold'>{item.textVal + ":"}</label>
                                        <select  {...register("Category", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'>
                                            <option selected disabled value="" >Select genre first</option>
                                            {genreOptions.map((item, index) => (
                                             item.value==genre&&item.options.map((i) => (
                                                    <option value={i.value}>{i.label}</option>
                                                ))
                                            ))}
                                        </select>
                                    </span>
                                }
                            </div>


                        ))}
                        <span className='flex flex-col'>
                                        <label className='text-[1.7vh] font-bold' >Online Or Offline?:</label>
                                        <select {...register("isOnline", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black ' >
                                            <option disabled selected value="" >Select Online/Offline</option>
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                        </select>
                                    </span>
                          <span className='flex flex-col'>
                        <label className='text-[1.7vh] font-bold'> Enter date of event:</label>
                           <input type='date' {...register("Date", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'/>    
                        </span>
                        <span className='flex flex-col'>
                        <label className='text-[1.7vh] font-bold'> Enter start time of event:</label>
                           <input type='time' {...register("StartTime", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'/>
                        </span>
                        <span className='flex flex-col'>
                        <label className='text-[1.7vh] font-bold'> Enter end time of event:</label>
                           <input type='time' {...register("EndTime", { required: "Please select an option" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'/>
                        </span>
                        <span className='flex flex-col col-span-2'>
                        <label className='text-[1.7vh] font-bold'> Enter description:</label>
                           <textarea type='text' placeholder='Enter Description' {...register("Description", { required: "Please select an option",maxLength:"6+0" })} className='border-2 px-2 py-1 bg-white  border-black'/>
                        </span>
                        <span className='flex flex-col'>
                        <label className='text-[1.7vh] font-bold'> Organized By:</label>
                           <input type='text' placeholder='Enter organizer name' {...register("Organizer", { required: "Please select an option",maxLength:"15" })} className='border-2 px-2 py-1 bg-white w-[200px] border-black'/>
                        </span>
                        <button type='submit' className='col-span-3 bg-[#ff006e] text-white font-bold px-6 py-2 mt-4 border-2 border-black shadow-[2px_2px_0_#000] hover:bg-[#ff228c]'>submit</button>

                    </form>
                </div>
            
        </div> 
        </div>
    )
}

export default AddEvent
