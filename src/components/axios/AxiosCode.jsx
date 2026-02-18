export default function AxiosCode() {
    const code = `
axios:
-----
A promise-based HTTP client for the browser and Node.js.
Used to send HTTP requests (GET, POST, PUT, DELETE, etc.).
Works well with APIs in both frontend and backend.
Automatically transforms JSON data

Use Axios:
----------
->Simpler syntax than fetch()
->Automatic JSON conversion
->Easy to handle errors
->Works in both frontend (React) and backend (Node.js)
->Supports interceptors and request cancellation


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
`;

    return (
        <div className="container mt-3">
            <h3>Axios Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
