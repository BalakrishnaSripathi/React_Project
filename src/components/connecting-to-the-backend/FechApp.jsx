import axios, { CanceledError } from 'axios'
import React, { useEffect, useState } from 'react'


const FechApp = () => {
    const[users,setUsers]=useState([]);
    const[error,setError]=useState("");
    const[isLoading,setLoading]=useState(false);


    useEffect(()=>{
        const controller=new AbortController();
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users',{signal:controller.signal})
        .then((res)=>setUsers(res.data))
        .catch((err)=>{
           if (err instanceof CanceledError) return;
            setError(err.message)})
        .finally(()=>{
            setLoading(false);
        })
        

        return ()=>controller.abort();
    },[])

    const deleteUser=(id)=>{
      const originalUsers=[...users]
        setUsers(users.filter((user)=>user.id!==id))
        axios.delete('https://jsonplaceholder.typicode.com/users'+id)
        .catch(err=>{
          setError(err.message);
          setUsers(originalUsers)
        })
    }
  return (
    <div>
        {error && <p className='text-red-500'>{error}</p>}
       {isLoading && <div className="spinner-border"></div>}
        <ul className='list-group'>
      {
        users.map((user)=><li className='list-group-item d-flex justify-between' key={user.id}>{user.name} <button className="btn btn-outline-danger" onClick={()=>deleteUser(user.id)}>Delete</button></li>)
      }
      </ul>
    </div>
  )
}

export default FechApp
