import { useEffect, useState } from "react";

export function useFectchData(url){
    const[data,setdata]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setdata(data))
        .catch((err)=>{
            console.log(err)

        })

    },[url]);
    return {data};
}