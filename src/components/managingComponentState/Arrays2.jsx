import React, { useState } from 'react'

const Arrays2 = () => {
    const [bugs,setBugs]=useState([
        {id:1 ,title:"Bug 1", fixed:false},
        {id:2 , title:'Bug 2', fixed:false}
    ])
    const handleClick=()=>{
        setBugs(bugs.map(bug=>bug.id===1?{...bug,fixed:true}:bug))
    }
  return (
    <div>
        {bugs.map(bug=><p key={bug.id}>{bug.title}{bug.fixed ?'Fixed':'New'}</p>)}
        <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default Arrays2
