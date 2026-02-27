import React, { useState } from 'react'

const UpdatingState = () => {
    const [drink,setDrink]=useState({
        title:"Indian",
        price:74
    });
  return (
    <div>
      Price:{drink.price} <br />
      <button className='border-2 border-black rounded-2' onClick={()=>setDrink({...drink,price:50})}>Update Price</button>
    </div>
  )
}

export default UpdatingState
