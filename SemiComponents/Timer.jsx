// import React from 'react'

import { useEffect, useState } from "react"
import image from "./2Q__.jpg";

export default function Timer() {
    const [timer,setTimer] = useState(new Date().toLocaleTimeString());
    const [date,setDate] = useState(new Date().toLocaleDateString());
    const [day , setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long' }))

     useEffect(()=>{
        // console.log("re-render");
         setInterval(()=>{
            setDate (new Date().toLocaleDateString())
            setTimer(new Date().toLocaleTimeString())
            setDay(new Date().toLocaleDateString('en-US', { weekday: 'long' }))
     },[1000]);
     }

     )    
  return (
    <div>
        <div className="card" style={{ width: '10rem', height: '10rem', backgroundColor: 'grey', margin: '1rem', display: 'flex', alignItems: 'center' }}>
        <img src={image} alt="Example" style={{ width: '40%', display:'inline' }}/>
        <div className="date" style={{ color: "black", display: 'flex', flexDirection: 'column' }}>
            <div className="date" style={{color:"black",fontSize:"1.5rem"}}>{date}</div>
            <div className="day" style={{color:"black",fontSize:"1.5rem"}}>{day}</div>
            <div className="timer" style={{color:"black",fontSize:"1.5rem"}}>{timer}</div>
        </div>
        </div>
      
    </div>
  )
}
