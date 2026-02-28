import React, { useState } from 'react'

const ControlledForm = () => {
    const [person,setPerson]=useState({
        name:'',age:''
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(person)

        

    }
  return (
     <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input  id='name' type="text" className="form-control" value={person.name} onChange={(e)=>setPerson({...person,name:e.target.value})} />
            </div>
            <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input  id='age' type="number" className="form-control" value={person.age} onChange={(e)=>setPerson({...person,age:e.target.value})} />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default ControlledForm
