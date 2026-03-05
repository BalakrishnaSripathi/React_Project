export default function ConnectingBackEndCode() {
    const code = `
Connecting to Back End
│
├── services
│   ├── api-client.js
│   ├── http-service.js
│   └── user-service.js
|___FechApp.jsx
|___useUsers.jsx


api-client.js:
-------------
import axios from "axios";


export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
   
});

http-service.js:
----------------
import apiClient from "./api-client";


class HttpService{
    endpoint;
    constructor(endpoint){
        this.endpoint=endpoint;
    }

    getAll(){
        const controller=new AbortController();
        const request=apiClient.get(this.endpoint,
            {signal:controller.signal});  
        return {request,cancel:()=>controller.abort()}     
    }
    deleteUser(id){
        return apiClient.delete(this.endpoint+"/"+id)
    }
    createUser(entity){
        return apiClient.post(this.endpoint,entity)

    }
    updateUser(entity){
       return apiClient.patch(this.endpoint+"/"+entity.id,entity)
    }
}
export default new UserService();


user-service.js:
----------------

import apiClient from "./api-client";

class UserService{
    getAllUsers(){
        const controller=new AbortController();
        const request=apiClient.get('/users',
            {signal:controller.signal});  
        return {request,cancel:()=>controller.abort()}     
    }
    deleteUser(id){
        return apiClient.delete('/users/'+id)
    }
    createUser(user){
        return apiClient.post('/users',user)

    }
    updateUser(user){
       return apiClient.patch('/users/'+user.id,user)
    }


}
export default new UserService();

FechApp.jsx:
------------
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


useUsers.jsx:
-------------

import React from 'react'
import { useState,useEffect } from 'react';
import  { CanceledError } from 'axios'
import userService from './services/user-service';

const UseUsers = () => {
    const[users,setUsers]=useState([]);
        const[error,setError]=useState("");
        const[isLoading,setLoading]=useState(false);
    
    
        useEffect(()=>{
            setLoading(true);
            const {request,cancel}=userService.getAllUsers()
            request.then((res)=>setUsers(res.data))
            .catch((err)=>{
               if (err instanceof CanceledError) return;
                setError(err.message)})
            .finally(()=>{
                setLoading(false);
            })
    
            return ()=>cancel();
        },[])
        return {users,error,isLoading,setError,setLoading,setUsers}
 
}
export default UseUsers;


`;

    return (
        <div className="container mt-3">
            <h3>Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
