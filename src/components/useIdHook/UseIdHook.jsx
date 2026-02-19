import React, { useId } from 'react'

const UseIdHook = () => {
    const userId=useId();
    const ageId=useId();
  return (
    <div>
      <div>
        <label htmlFor={`user-${userId}`}>User Name</label>
        <input type="text" className='border-1 border-black rounded-1' id={`user-${userId}`} />
      </div>
      <div>
        <label htmlFor={`age-${ageId}`}>Age</label>
        <input type="text" className='border-1 border-black rounded-1' id={`age-${ageId}`} />
      </div>
    </div>
  )
}

export default UseIdHook
