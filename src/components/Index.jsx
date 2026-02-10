import { Link } from "react-router-dom";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";

export default function Index() {
    const [show,setShow]=useState(false);
    useEffect(()=>{
        setShow(true);
        const timer = setTimeout(() => setShow(false), 5000);
    },[])

    return (

        <div className="container mt-4">
            {show && (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert className="animate-bounce" variant="filled" severity="success">
        Today I learn Material UI
      </Alert>
      </Stack>)}
            
            <div className="text-center mb-4">
                <h1 className="fw-bold">Welcome to React</h1>
                <p className="text-muted">React Concepts Navigation</p>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <ul className="list-group list-group-flushnpm ">
                    
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Component">Functional Component</Link>
                        </li>
                         <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ClassComponent">Class Component</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Props">Props</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/DataBinding">Data Binding</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/CustomHook">Custom Hook</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ReactHook">useState & useEffect</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ContextHook">useContext Hook</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/UseReducer">useReducer</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/UseRef">useRef</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ConditionalRendering">Conditional Rendering</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Routing">Routing</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Server">Creating API (GET & POST)</Link>
                        </li>
                        
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/FormComponent">Form Component</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Yup">Yup Validation</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Cookies">Cookies</Link>
                        </li>
                         <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Tailwind">Tailwind</Link>
                        </li>
                        <li className="list-group-item "><FiberNewIcon/>
                            <Link className=" animate-pulse text-green-600 font-semibold " to="/MaterialUi">Material UI</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/Axios">Axios</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
