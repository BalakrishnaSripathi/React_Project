export default function UseImaperativeHookCode() {
    const code = `
useImperativeHandle:
--------------------
useImperativeHandle allows a child component to expose specific methods or values to a parent component using refs.
👉 Normally:

Parent → passes ref

Child → exposes full DOM element

But with useImperativeHandle,
👉 Child can control what parent can access

⚡ Important Rules

✔ Must use forwardRef
✔ Used with useRef
✔ Used only in function components
✔ Used for imperative control

UseImperativeHandleHook.jsx   --> Parent component
-----------------------------------------------
import React, { useRef } from 'react'
import CustomeInput from './CustomeInput'

const UseImperativeHandleHook = () => {
    const myInputRef =useRef();
    function onClickHandler(){
        myInputRef.current.showMessage()
        myInputRef.current.focusInput()

    }
  return (
    <div>
      <CustomeInput ref={myInputRef}/>
      <button className="m-2 border-2 border-transparent  hover:border-blue-600  rounded-2"
 onClick={onClickHandler}>Focus</button>
    </div>
  )
}

export default UseImperativeHandleHook

CustomeInput.jsx        --> ChildComponent
------------------------------------------

import { colors } from '@mui/material';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const CustomeInput = (props,ref) => {
    const myStyle={
        backgroundColor:"green",
        color:"white",
        fontSize:"1.25rem",
        padding:"5px 10px",
        margin:"10px",
        border:"none",
        borderBottom:"solid 5px red"

    }
    const inputRef =useRef()
    useImperativeHandle(ref,()=>({
        focusInput:()=>{
            inputRef.current.focus();
        },
        showMessage:()=>{
            alert("hai  "+inputRef.current.value)
        }
    }));
  return (
    <div>
      <input type="text"  ref={inputRef} style={myStyle} placeholder='Enter content here..'/>
    </div>
  )
}

export default forwardRef(CustomeInput)

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
