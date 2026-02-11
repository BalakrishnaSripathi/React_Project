import { createSlice } from "@reduxjs/toolkit";

const SocialSlice=createSlice({
    name:'social',
    initialState:{
        books:["Social book 1","Social book 2"]
    },
    reducers:{
        addbook:(state,action)=>{
            console.log("adbook function:",action.payload)
            state.books.push(action.payload)
    },
    emptyBooks:(state,action)=>{
        state.books=[]
    }
}
})
export const {addbook,emptyBooks}=SocialSlice.actions
export default SocialSlice.reducer;