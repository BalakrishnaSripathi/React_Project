import React, { useDebugValue, useEffect, useState } from 'react'

const useCounter=(initialvalue=0)=>{
    const [count,setCount]=useState(initialvalue)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000)
        return ()=>clearInterval(interval)
    },[])
    useDebugValue(count>18 ?"Eligible":"Not Eligible")
    return count
};

const UseDebugValue = () => {
    const count=useCounter();
  return (
    <div>
      <div>
        <h1>Current Count Value :{count}</h1>
      </div>
    </div>
  )
}

export default UseDebugValue
