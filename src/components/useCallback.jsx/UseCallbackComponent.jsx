import React, { useCallback, useState } from 'react'
import Button from './Button';
import { increment } from '../reduxStore/slices/ReduxCounterSlice';
const UseCallbackComponent = () => {
    const [input,setInput]=useState(0);
    const[count,setCount]=useState(0);
    function inputHandler(e){
        setInput(e.target.value)
        setCount(e.target.value)
    }
    const Increment = useCallback(()=>{
        setCount((prev)=>parseInt(prev)+1);
        console.log(count)
    },[input]);
   console.log("Parent component rendered")
  return (
    <div className='flex justify-center'>
      <h1>Use CallBack HOOK</h1>
      <div>
        <label>Input value:</label>
        <input type='number' onChange={inputHandler}/>
        <h3>{count}</h3>
        <button onClick={Increment}>Increment</button>
        <br />
        <Button onClick={Increment}></Button>
      </div>
    </div>
  )
}

export default UseCallbackComponent
