import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosDemo3 = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        const getUsers=async()=>{
            const res =await axios.get()
            
        }

    },[])
  return (
    <div>
        <ol>
      {
        users.map((value,index)=>(
          <li key={index}>{value.name}</li>  
        ))
      }
      </ol>
    </div>
  )
}

export default AxiosDemo3
