export default function UseTransitionCode() {
    const code = `
useTransition Hook:
-------------------
useTransition is a React hook used to handle non-urgent (low priority) updates so that the UI stays responsive.

Sometimes updates are heavy (like):

->Filtering large lists
->Searching
->Rendering big components)
->Without useTransition, UI may freeze.


import React, { useEffect, useState, useTransition } from 'react'

const UseTransitionHook = () => {
    const [searchinput,setSearchInput]=useState("");
    const [filterdata,setFilterData]=useState([]);
    const [ispending ,startTransition]=useTransition();
    const colors=["Red","Green","Black","Purple","White","Yellow"]

    useEffect(()=>{
        setFilterData(colors)
    },[])
    const handleSearch=(e)=>{
        setSearchInput(e.target.value)
        startTransition(()=>{
           const filtered=colors.filter((color)=>color.toLowerCase().includes(e.target.value.toLowerCase()));
           setFilterData(filtered);
        })
    }

  return (
    <div>
      <input type='text' className='border-2 border-black' value={searchinput} onChange={handleSearch} placeholder='Seach color'/>
      {ispending && <p>Loading........</p>}
      <ul>
        {
            filterdata.map((color,index)=>(
                <li key={index}>{color}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UseTransitionHook


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
