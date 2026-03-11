export default function ZustandCode() {
    const code = `
Zustand:
--------
Zustand is a lightweight state management library used to manage global state in React applications.

It allows multiple components to share and update state without prop drilling or providers.


import {create} from "zustand"

const useStore=create((set)=>({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    reset:()=>set(()=>({count:0})),
    user:'',
    login:(username)=>set({user:username}),
    logout:()=>set({user:''})
   
}))
export default useStore;

import Counter from './Counter';
import useStore from './store';

function Login() {
  const { user, login, logout } = useStore();

  return (
    <div>
      <h2>{user ? Welcome {user} : "Not Logged In"}</h2>

      <button className='btn btn-outline-success' onClick={() => login("TO Counter Application")}>Login</button>
      <button className='btn btn-outline-danger' onClick={logout}>Logout</button>
      {user?<Counter/>:''}
    </div>
  );
}
export default Login





import Login from './LoginZustand'
import useStore from './store'


const Counter = () => {
    const {count,increment,decrement,reset}=useStore()
  return (
    <div className='card p-4 text-center d-flex align-items-center justify-content-center'>
        <div>
    <button onClick={decrement} className='m-3 btn btn-outline-danger w-20 '>-</button>
    {count}
      <button onClick={increment} className=' m-3 btn btn-outline-primary w-20'>+</button>
      </div>
      <div>
        <button onClick={reset} className='btn btn-outline-secondary w-20'>Reset</button>
      </div>
      </div>
      
  )
}

export default Counter


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
