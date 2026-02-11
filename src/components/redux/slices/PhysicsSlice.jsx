import { createSlice } from "@reduxjs/toolkit";

const PhysicsSlice =createSlice(
 {
    name:'Physics',
    initialState:{
        books:["Physics book 1","Physics book 2","Physics book 3"],
        enrolledStudentsCount:15
    },reducers:{
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        pemptyBooks:(state,action)=>{
                state.books=[]
        },
        incrementEnrolledstudents:(state,action)=>{
            state.enrolledStudentsCount++
        }
    }
 }
)

export const {addBook,pemptyBooks,incrementEnrolledstudents}=PhysicsSlice.actions
export default PhysicsSlice.reducer;
