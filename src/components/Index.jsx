import { Link } from "react-router-dom";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

export default function Index() {
    const [show,setShow]=useState(false);
    useEffect(()=>{
        setShow(true);
        const timer = setTimeout(() => setShow(false), 5000);
    },[])

    return (

        <div className="container mt-4">

    {show && (
    <Stack
    direction="row"
    alignItems="center"
    spacing={2}
    sx={{ width: "100%" }}
    >
    <Alert
      className="animate-bounce flex-1"
      variant="filled"
      severity="success"
    >
      Today I learned useDeferredValue Hook
    </Alert>

    <ArrowDownwardSharpIcon
      className="animate-bounce bg-green-600 text-white rounded-2xl p-1"
      fontSize="large"
    />
    </Stack>
        )}

            
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
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/MaterialUi">Material UI</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" text-decoration-none " to="/Redux">Redux</Link>
                        </li>
                         <li className="list-group-item ">
                            <Link className=" text-decoration-none" to="/UseMemo">useMemo</Link>
                        </li>
                         <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseCallBack">useCallback</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/Hoc">Higher Order Component</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/CAPI">Context API</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" text-decoration-none " to="/UseLayout">useLayoutEffect</Link>
                        </li>
                         <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseDebug">useDebugValue</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseTransition">useTransition Hook</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/Axios">Axios</Link>
                        </li>
                         <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/Crud">Axios with CRUD Operations</Link>
                        </li>
                         <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseImperativeHandleHook">UseImperativeHandleHook</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseId">useId Hook</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className="text-decoration-none" to="/UseSyncExternalStore">useSyncExternalStore Hook</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" animate-pulse text-green-600 font-semibold " to="/UseActionState">useActionState Hook</Link>
                        </li>
                         <li className="list-group-item "><FiberNewIcon className="text-green-600"/>
                            <Link className=" animate-pulse text-green-600 font-semibold " to="/useInsertionEffect">useInsertionEffect Hook</Link>
                        </li>
                         <li className="list-group-item "><FiberNewIcon className="text-green-600"/>
                            <Link className=" animate-pulse text-green-600 font-semibold " to="/UsedeferredValue">useDeferredValue Hook</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
