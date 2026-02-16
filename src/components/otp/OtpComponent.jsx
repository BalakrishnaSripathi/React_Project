import React, { useState } from 'react'

const OtpComponent = ({size=6}) => {
    const [inputValues,setInputValues]=useState(()=>{
        return new Array(size).fill("");
    })

    const handleNumericInput=(event)=>{
        const inputValue =Number(event.key);
        if (isNaN(inputValue))return;
        const inputIndex =Number(event.target.id)
        console.log(inputIndex);
        if (inputValues[inputIndex].length===0){
            setInputValues((prev)=>{
                const newValues=[...prev];
                newValues[inputIndex]=inputValue.toString();
                return newValues;
            })
        }

    }

    const onKeyUp=(event)=>{
        handleNumericInput(event)
    }
  return (
<div className= "h-screen flex items-center justify-center">
  <div className="text-center min-w-80 flex">
    {inputValues.map((inputValue, index) => (
      <input id={index.toString()} className=" bg-white border-2 border-gray m-1 p-1 w-16 h-16 text-2xl text-center rounded-2" key={index.toString()}
        value={inputValue} onKeyUp={onKeyUp} 
      />
    ))}
  </div>
</div>
  )
}

export default OtpComponent
