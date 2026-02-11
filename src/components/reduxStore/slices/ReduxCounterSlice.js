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
