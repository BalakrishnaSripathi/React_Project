import axios from "axios";
import { useEffect, useState } from "react"

export default function AxiosDemo(){
    const[users,setusers]=useState([]);
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/getusers")
        .then(function(response){
            setusers(response.data)
        }).catch(function(ex){
            console.log(ex)
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(u=>
                        <li key={u.UserName}>{u.UserName}</li>
                    )
                }
            </ol>

        </div>
    )
}