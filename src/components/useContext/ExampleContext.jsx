import {createContext, useContext, useState } from "react";

const giftContext=createContext()

export const GiftProvider=({children})=>{
    const [surprise,setSurprice]=useState("Apple")

    return( 
    <giftContext.Provider value={{surprise,setSurprice}}>
        {children}
    </giftContext.Provider>
    )
}

export const useData=()=>useContext(giftContext)