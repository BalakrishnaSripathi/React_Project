import React from 'react'
import Bangalore from './Bangalore'
import { useData } from './ExampleContext'

const Hyderabad = () => {
    const {surprise}=useData()
  return (
    <div>
        <h1>Inside Hyderabad Component-{surprise}</h1>
      <Bangalore/>
    </div>
  )
}

export default Hyderabad
