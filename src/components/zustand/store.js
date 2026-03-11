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