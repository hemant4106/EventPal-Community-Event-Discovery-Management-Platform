import React, { useEffect, useState } from 'react'
import "./cards.css"
import monthColorMap from '../../constants/MonthsColor'
import genreOptions from '../../constants/genreoptions'
function Cards({ title, location,organizer, isPaid, genre, category, Description, date,startTime,endTime, isOnline}) {
  const EventDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric'
  })
  const EventMonth = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
  })

  function CheckEventMonthFromArray(month) {
    for (let i = 0; i < monthColorMap.length; i++) {

      if (month === monthColorMap[i].month) {
        const colorcode = monthColorMap[i].color
        return (colorcode)
      }
    }
  }
  function bgColorAssignToUpperContainerByGenre() {
    for (let i = 0; i < genreOptions.length; i++) {
      if (genreOptions[i].value === genre) {
        const returnedColor = genreOptions[i].colorcode
        return (returnedColor)
      }
    }
  }
  console.log(bgColorAssignToUpperContainerByGenre())
  // console.log(EventMonth)
  // console.log(CheckEventMonthFromArray(EventMonth))
  return (

    <div className="card-container scale-60 ">
      <div className=' flex gap-1 p-1  w-full h-[5rem] flex-wrap ' style={{ backgroundColor: bgColorAssignToUpperContainerByGenre(),borderBottom: "20px solid "+bgColorAssignToUpperContainerByGenre()}} >
        <span className='bg-amber-100 rounded-[5px] p-2 h-[30px] text-xl font-semibold flex items-center justify-center'>
          {isPaid}
        </span>
        <span className='bg-amber-100 rounded-[5px] p-2 h-[30px] text-xl font-semibold flex items-center justify-center'>
          {isOnline}
        </span>
        <span className='bg-amber-100 rounded-[5px] p-2 h-[30px] text-xl font-semibold flex items-center justify-center'>
          {genre.replace("_", " & ")}
        </span>
      </div>
      <div className={`upper-container`} style={{ backgroundColor: bgColorAssignToUpperContainerByGenre() , borderTop: "8px solid "+bgColorAssignToUpperContainerByGenre()}}>
        <div className={`image-container ${CheckEventMonthFromArray(EventMonth)} scale-75`}>
          <div className={`items-center flex-col flex w-[8.5rem] `}>
            <p className='text-[33px] flex items-center justify-center'>
              {EventDate}
            </p>
            <p className='text-[23px] flex justify-center items-center'>
              {EventMonth}
            </p>

          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className='pt-3'>
          <h3 className='w-full p-2 flex items-center justify-center text-center'>{title}</h3>
          <h4 className='font-extrabold'>{"→ "+ location}</h4>
          <h5>{"→ "+Description}</h5>
        </div>
        <div className='flex flex-col absolute bottom-5'>
          <div>
            <p>{category.replace("_", " ")}</p>
          </div>
          <div>
            <a href="#" className="btn w-[350px]">{startTime+" - "+endTime}</a>
          </div>
          <div className='pt-1'>
            Organizer: {organizer}
          </div>
        </div>
      </div>
    </div>



  )
}

export default Cards
