export default function UseLayoutCode() {
    const code = `
useLayoutEffect & useEffect
---------------------------
Both hooks run after rendering.
The difference is that useLayoutEffect runs before the browser paints the UI, 
while useEffect runs after the UI is painted.

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
    <input type="number"  onChange={(e)=>setNumber(e.target.value)}  value={number}/>
      
    </div>
  )
}

export default UseLayout



`;

    return (
        <div className="container mt-3">
            <h3>Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
