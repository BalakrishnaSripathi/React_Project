import { useMemo } from "react";
import { useState } from "react"

export default function UseMemoComponent(){
    const [count,setCount]=useState(0);
    const[number,setNumber]=useState(1);
    const factorial=useMemo(()=>fact(number),[number])

    function setNumber1(e){
        setNumber(e.target.value)
    }
   
    return(
        <div className="flex gap-40 border-2 h-40 ">
        <div className="ml-5">
            <h3>{count}</h3>
            <button className="bg-green-600  text-white hover:bg-green-700 shadow active:scale-95 p-[2px] transition transform duration-150 rounded-2" onClick={()=>setCount(count+1)}>Count</button>
        </div>
        <div>
            <input onChange={setNumber1} type="number" placeholder="Enter number"/>
            <h3>{factorial}</h3>
            </div>

        </div>
    )

    function fact(n){
        let ans=1;
        for(var i=n;i>=1;i--){
                ans=ans*i;
        }
        return ans
    }
}