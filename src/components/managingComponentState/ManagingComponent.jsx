import React from 'react'
let impureCount=0
const ManagingComponent = () => {
    let count=0
    count++;
    impureCount++
  return (
    <div className='flex gap-5'>
      <div>
        Message{count}</div>
      <div>
    Message{impureCount}</div>
    </div>
  )
}

export default ManagingComponent
