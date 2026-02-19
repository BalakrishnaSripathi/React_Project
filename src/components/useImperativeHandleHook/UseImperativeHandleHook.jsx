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
