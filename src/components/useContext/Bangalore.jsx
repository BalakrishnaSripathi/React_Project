import React from 'react'
import { useData } from './ExampleContext'

const Bangalore = () => {
    const {surprise}=useData()
  return (
    <div>
      <h4>I am Bangalore ,<span className='text-green-500'>{surprise}</span> Recived from Delhi</h4>
    </div>
  )
}

export default Bangalore
