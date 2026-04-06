import { Dropdown } from 'bootstrap'
import React from 'react'
import Juggle from './Juggle'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const AutoAnimateApp = () => {
     const [items, setItems] = useState([0, 1, 2])
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  const add = () => setItems([...items, items.length])
  return (
    <div>
       
      
      <div>
        <h2>Numbers</h2>
  <ul ref={parent}>
    {items.map(
      item => <li key={item}>{ item }</li>
    )}
  </ul>
  <button className='btn btn-success' onClick={add}>Add number</button>
  <button className='btn btn-danger' onClick={() => enableAnimations(false)}>Disable</button>
      </div>
      <h2>Juggle</h2>
      <Juggle/>

      <h2>Cycle Emoji</h2>
     
    </div>
  )
}

export default AutoAnimateApp
