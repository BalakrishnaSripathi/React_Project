import React, { useState } from 'react'
import Hyderabad from './Hyderabad'
import { useData } from './ExampleContext';

const Kalkata = () => {
    const [gift,setGift]=useState("");
    const {surprice,setSurprice}=useData();
  return (
    <div>
        <h1>kalkata Component</h1>
        <p>Child can update context data by calling the setter function provided in Context</p>
        <input className='border-2' type="text" placeholder='Enter Gift Name'  onChange={(e)=>{setGift(e.target.value)}} value={gift}/>
        <button onClick={()=>{setSurprice(gift);setGift("")}} className='btn btn-outline-info'>Update</button>
      <Hyderabad/>
    </div>
  )
}

export default Kalkata
