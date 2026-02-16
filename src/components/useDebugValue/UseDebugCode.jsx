export default function UseDebugCode() {
    const code = `
useDebugValue is used inside custom hooks to display debugging information in React DevTools.
 It does not affect rendering or UI.

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
