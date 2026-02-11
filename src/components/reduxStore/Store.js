import { configureStore } from "@reduxjs/toolkit";
import ReduxCounterSlice from "./slices/ReduxCounterSlice";


const Store=configureStore({
    name:"store",
    reducer:{
        ReduxCounter:ReduxCounterSlice
    }
})
export default Store;