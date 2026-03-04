import React, { useEffect, useState } from 'react'
import userService from './services/user-service';
import UseUsers from './useUsers';


const FechApp = () => {
    const {users,error,isLoading,setError,setUsers,setLoading}= UseUsers();

    const deleteUser=(id)=>{
      const originalUsers=[...users]
        setUsers(users.filter((user)=>user.id!==id))
        userService.deleteUser(id)
        .catch(err=>{
          setError(err.message);
          setUsers(originalUsers)
        })
    }
    const addUser=()=>{
      const originalUsers=[...users]
      const newUser={id:0,name:'Balu'}
      setUsers([newUser,...users])

      userService.createUser(newUser)
      .then(res=>setUsers([res.data,...users]))
      .catch(err=>{
        setError(err.message)
        setUsers(originalUsers)
      })
    }

    const updateUser=(user)=>{
      const orginalUsers=[...users]
      const updatedUser={...user,name:user.name+'!'};
      setUsers(users.map(u=>u.id===user.id ? updatedUser :u))


      userService.updateUser(updateUser)
      .catch(err=>{
        setError(err.message)
        setUsers(orginalUsers)
      })

    }

  return (
    <div>
        {error && <p className='text-red-500'>{error}</p>}
       {isLoading && <div className="spinner-border"></div>}
       <button className='btn btn-primary mb-3' onClick={addUser}>ADD</button>
        <ul className='list-group'>
      {
        users.map((user)=>
        <li className='list-group-item d-flex justify-between' key={user.id}>{user.name}
        <div>
        <button className='btn btn-outline-secondary mx-1' onClick={()=>updateUser(user)}>Update</button>
         <button className="btn btn-outline-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
         </div>
         </li>)
      }
      </ul>
    </div>
  )
}

export default FechApp
