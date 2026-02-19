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
