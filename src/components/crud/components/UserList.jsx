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
