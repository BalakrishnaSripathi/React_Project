export default function CurdCode() {
    const code = `

UserApi.js
----------
import axios from "axios";

const API =axios.create({
    baseURL:"http://127.0.0.1:4000"
})

export const getUsers=()=>API.get("/users");

export const createUser=(data)=>API.post("/users",data);

export const updateUser =(userId,data)=>API.put(/user/{userId},data)

export const deleteUser=(userId)=>API.delete(/users/{userId})


UsersPage.jsx
-------------
import React, { useEffect, useState } from 'react'
import { createUser, deleteUser, getUsers } from '../api/UserApi'
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const UserPage = () => {
    const [newUser, setNewUser] = useState({
  _id: "697239d63bf552f373c33399",   // manually set unique id
  UserId: "10620",
  UserName: "DEMO",
  Password: "123789",
  Age: 25,
  Mobile: "6303622464",
  Subscribed: true
});

    const [users,setUsers]=useState([])
    const fetchUsers=async ()=>{
        try {
            const res=await getUsers();
            setUsers(res.data)
        } catch (error) {
            console.log(error)
            
        }
    };
    useEffect(()=>{
        fetchUsers();
    },[])
    
    
    const handleAddUser= async(formData)=>{
        try {
            const res=await createUser(formData)

            fetchUsers();
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleDelete = async (userId)=>{
        try{
            await deleteUser(userId);
            fetchUsers()
        }
        catch(err){
            console.log(err)
        }
    }


  return (
    <div>
        <UserForm onAdd={handleAddUser}/>

      <UserList users={users}
      onDelete={handleDelete}
      />

    </div>
  )
}

export default UserPage



Components:

1)UserList.jsx
--------------

import React from 'react'

const UserList = ({users,onDelete}) => {

  return (
        <table className='table-auto border-collapse border border-black-600 ...'>
            <thead>
                <tr>
                <th className='border border-black p-1'>User Id</th>
                <th className='border border-black p-1'>Name</th>
                <th className='border border-black p-1'>Age</th>
                <th className='border border-black p-1'>Mobile</th>
                <th className='border border-black p-1'>Subscribed</th>
                <th className='border border-black p-1'>Action</th>
                </tr>
            </thead>
        
        <tbody>
        {users
        .filter(user=>user.UserId !==null)
        .map((user) => (
            <tr key={user.id}>
                <td className='border border-black p-1'>{user.UserId}</td>
                <td className='border border-black p-1'>{user.UserName}</td>
                <td className='border border-black p-1'>{user.Age}</td>
                <td className='border border-black p-1'>{user.Mobile}</td>
                <td className='border border-black p-1'>{user.Subscribed ? "Yes":"No"}</td>
                <td className='border border-black p-1 gap-2'>
                    <button className='bg-blue-600 border-2 hover:bg-blue-700 active:scale-95 rounded-2 p-1.5'>
                        Edit
                    </button>
                    <button onClick={()=>{{onDelete(user.UserId)}}} className='bg-red-600 border-2 rounded-2 hover:bg-red-700 active:scale-95 p-1.5 ml-1'>
                        Delete
                    </button>
                </td>
            </tr>

        ))}  
      </tbody>
      </table>
  )
}

export default UserList


2)UserForm.jsx
--------------


import React from "react";
import { useFormik } from "formik";

const UserForm = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Age: "",
      Mobile: "",
      Subscribed: false
    },

    onSubmit: (values, { resetForm }) => {
      onAdd(values);    
      resetForm();       
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginBottom: "20px" }}>

      <input type="text" name="UserId" placeholder="User ID" onChange={formik.handleChange} value={formik.values.UserId} required
      />

      <input type="text" name="UserName" placeholder="User Name" onChange={formik.handleChange} value={formik.values.UserName} />

      <input type="password" name="Password" placeholder="Password" onChange={formik.handleChange} value={formik.values.Password}/>

      <input type="number" name="Age" placeholder="Age" onChange={formik.handleChange} value={formik.values.Age}/>

      <input type="text" name="Mobile" placeholder="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} />

      <label> Subscribed
    <input type="checkbox" name="Subscribed" onChange={formik.handleChange} checked={formik.values.Subscribed}
    />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;





`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
