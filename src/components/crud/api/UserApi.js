import axios from "axios";

const API =axios.create({
    baseURL:"http://127.0.0.1:4000"
})

export const getUsers=()=>API.get("/users");

export const createUser=(data)=>API.post("/users",data);

export const updateUser =(userId,data)=>API.put(`/user/${userId}`,data)

export const deleteUser=(userId)=>API.delete(`/users/${userId}`)

