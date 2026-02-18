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
