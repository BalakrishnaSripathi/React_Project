export default function CustomHookCode() {
    const code = `
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

`;
const code2=`import { useFectchData } from "./useFetchData"

export default function CustomHookDemo(){
    const {data}=useFectchData("http://fakestoreapi.com/products")

return(
    <div className="container-fluid row">
        <h2>products</h2>
            {
                data.map(v=>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 " >
                    <div className="card p-2 " style={{width:"300px"}}>
                    <img src={v.image}  height="200px" />
                    {v.title}
                    </div>
                    </div>
                )
            }
    </div>
)
}
`

    return (
        <div className="container mt-3">
            <h3>Creating Custom Hook "useFectchData" Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
             <h3>Hook useFectchData </h3>
            <pre>
                <code>{code2}</code>
            </pre>
        </div>
    );
}
