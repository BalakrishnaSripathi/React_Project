export default function UseMemoCode() {
    const code = `
. Help us to improve the performance of application, when we are
performing most expensive function

. useMemo will not run for every re-render happens

. It will run during the first render and when it's dependency values
changes.

. useEffect()
-------------
will run after render of the compoent.

· useMemo() 
------------
will run during render of the compoent.



import { useMemo } from "react";
import { useState } from "react"

export default function UseMemoComponent(){
    const [count,setCount]=useState(0);
    const[number,setNumber]=useState(5);
    const factorial=useMemo(()=>fact(number),[number])

    function setNumber1(e){
        setNumber(e.target.value)
    }
   
    return(
        <div className="flex gap-40 border-2 h-40 w-80">
        <div>
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
`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
