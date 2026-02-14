import { ThemeContext } from './Home'
import React, { useContext } from 'react'

const About = () => {
    const  theme=useContext(ThemeContext)
  return (
    <div className='bg-emerald-400 border-2 border-orange-400'>
      <h1>About Component</h1>
      <button className={`${theme==='light'?"bg-blue-300 border-2 border-black p-1 rounded-2":"bg-red-300 border-2 border-black p-1 rounded-2"}`}>About</button>
    </div>
  )
}

export default About
