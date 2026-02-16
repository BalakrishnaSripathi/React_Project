import React, { useEffect, useState,useLayoutEffect } from 'react'

const UseLayout = () => {
    const [number,setNumber]=useState(0);
    useEffect(()=>{
        console.log("UseEffect Executed" +number)
    },[number])

    useLayoutEffect(()=>{
        console.log("useLayoutEffect Executed"+number)
    },[number])

  return (
    <div>
    <h1>Input Value:{number}</h1>
    <input type="number" className='border-2 border-black' onChange={(e)=>setNumber(e.target.value)}  value={number}/>
      
    </div>
  )
}

export default UseLayout
