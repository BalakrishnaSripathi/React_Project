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
