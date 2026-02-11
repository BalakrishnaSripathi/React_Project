export default function ReduxStoreCode() {
    const code = `
 Redux store that includes the ReduxCounterSlice reducer under the ReduxCounter key:
 -----------------------------------------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import ReduxCounterSlice from "./slices/ReduxCounterSlice";


const Store=configureStore({
    name:"store",
    reducer:{
        ReduxCounter:ReduxCounterSlice
    }
})
export default Store;



Redux slice that manages counter state with increment, decrement, and reset actions:
-----------------------------------------------------------------------------------

import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const ReduxCounterSlice =createSlice( {
    name:"ReduxCounter",
    initialState:{
        count:0,
        performedAction:""
    },
    reducers:{
        increment:(state,action)=>{
            state.count+=1;
            state.performedAction=action.payload;
        },
        decrement:(state,action)=>{
            state.count-=1;
            state.performedAction=action.payload;
        },
        reset:(state,action)=>{
            state.count=0;
            state.performedAction=action.payload;
        }
    } 
}
)
export const{increment,decrement,reset}=ReduxCounterSlice.actions;
export default ReduxCounterSlice.reducer;



React component that displays and controls the Redux counter value using increment, decrement, and reset actions.
-----------------------------------------------------------------------------------------------------------------

import React from 'react'
import { increment,decrement,reset } from './slices/ReduxCounterSlice';
import { useSelector,useDispatch } from 'react-redux';

const ReduxCounter = () => {
    const dispatch=useDispatch();
    const value=useSelector((state)=>state.ReduxCounter.count);
    const action=useSelector((state)=>state.ReduxCounter.performedAction);
    function increseValue(){
        dispatch(increment("Increased Value"))
    }
    function decrementValue(){
        dispatch(decrement("Decreased Value"))
    }
    function resetValue(){
        dispatch(reset("Reset Value"))
    }
  return (
    <div>
      <h1 className='flex justify-center'>Count Value</h1>
      <h1 className='text-lg text-center' >{value}</h1>
      <h3>Performed Action:{action}</h3>
      <div className='flex justify-center gap-20'>
      <button className='p-[2px] bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 active:scale-95 transition transform duration-150 rounded-3' onClick={increseValue} >Increment</button>
      <button className='bg-red-600 text-white font-medium shadow hover:bg-red-700 active:scale-95 transition transform duration-150 rounded-2 p-[2px]' onClick={decrementValue} >Decrement</button>
      <button className='bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95 transform duration-150 p-[2px] rounded-2' onClick={resetValue} >Reset</button>
    </div>
    </div>
  )
}

export default ReduxCounter;



`;

    return (
        <div className="container mt-3">
            <h3>Redux Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
