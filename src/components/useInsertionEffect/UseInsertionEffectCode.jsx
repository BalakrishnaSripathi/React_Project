export default function UseInsertionEffectCode() {
    const code = `
useInsertionEffect:
-------------------

useInsertionEffect is a special React hook used mainly for CSS-in-JS libraries.

->It runs before DOM mutations
->Even before useLayoutEffect

When using libraries like:
--------------------------
Styled-components
Emotion
CSS-in-JS tools
They need to insert styles into the DOM before layout happens.

Execution Order:
React rendering order:
useInsertionEffect
useLayoutEffect
useEffect

import React, { useInsertionEffect, useState } from 'react'

const UseInsertionEffect = () => {
     const [count,setCount]=useState(0);
useInsertionEffect(()=>{
    const styleElement=document.createElement("style");
    if (count%2==0){
    styleElement.textContent=
    .my-style{
    color:white;
    background-color:#007bff;
    padding:10px ;
    border-radius:8px
    };
    document.head.appendChild(styleElement);
    }
    else{
    styleElement.textContent=
    .my-style{
    color:white;
    background-color:red;
    padding:10px ;
    border-radius:8px
    };
    document.head.appendChild(styleElement);

    }
},[count])


  return (
    <>
    <div className='my-style'>
      <h1>Hello wellcome react</h1>
    </div>
    {
       (()=>{
        if (count%2===0){
           return <h1>Positive Number</h1>
        }
        else{
            return <h1>Negitive Number</h1>
        }

        })()
        }
    <p className='my-style'>
      <h1>Dmantz</h1>
    </p>
    <h2>Count:{count}</h2>
    <button className='bg-green-600 p-1 rounded-2 hover:bg-green-700  active:scale-95 border-2 border-red-500' onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}
export default UseInsertionEffect


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
