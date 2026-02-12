export default function UseCallbackCode() {
    const code = `

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
    <div className='card w-50 ml-40 flex flex-column justify-center align-items-center'>
      <h1>Use CallBack HOOK</h1>
      <div><label>Input value:</label>
        <input className='border-1 border-black rounded-2 h-5' type='number' onChange={inputHandler}/></div>
      <div className='flex flex-column justify-center '>
      <div>
        <h3>{count}</h3>
        <button className='bg-green-600 p-[1px] rounded-2 hover:bg-green-700 active:scale-95 ' onClick={Increment}>Increment</button>
        <br />
        <Button onClick={Increment}></Button>
      </div>
      </div>
    </div>
  )
}

export default UseCallbackComponent


Button.jsx
----------
import React from 'react'

const Button =React.memo( ({Increment}) => {
    console.log("Chaild component render")
  return (
    <button onClick={Increment}>CLICK ME</button>
  )
})

export default Button


`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
