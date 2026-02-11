import { configureStore } from "@reduxjs/toolkit";
import SocialSlice from './slices/SocialSlice.jsx';
import PhysicsSlice from './slices/PhysicsSlice.jsx'
const Store=configureStore({
    reducer:{
        social:SocialSlice,
        Physics:PhysicsSlice
    }
})
export default Store;