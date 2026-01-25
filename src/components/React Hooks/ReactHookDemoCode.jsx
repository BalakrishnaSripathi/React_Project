export default function ReactHookDemoCode() {
    const code = `
                                useState Hook
                                ---------------------
- It configures a state for component.
- State can store values and make it available until the component unmount.
- You can store any value into state.

Syntax:
           const [product, setProduct] = useState({});
         const [products, setProducts] = useState([]);

         setProduct({ });
         setProducts([]);

                                useEffect Hook
                                ---------------------
- It can manage
        a) mounting
        b) updating
        c) unmount

Syntax:
               useEffect(()=> {
                     // actions on mount
                    // actions on update
                    return(()=>{
                        // actions on unmount
                    })
               },[ ])


Ex:
import { useState, useEffect } from "react"

export default function ReactHookDemo()
{
    const [msg, setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>)
    }

    function handleErrorClick(){
        setMsg(<ErrorComponent />)
    }

    return(
        <div className="container-fluid">
            <button onClick={handleSuccessClick}>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <hr />
            <div>
                {msg}
            </div>
        </div>
    )
}

function SuccessComponent(){
    useEffect(()=>{
        alert('Success Component Will Mount');
        return(()=>{
            alert('Success Component will unmount');
        })
    },[])
    return(
        <div>
            <h2>Login Success..</h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(()=>{
        alert('Error Component Will Mount');
        return(()=>{
            alert('Error Component will unmount');
        })
    },[])
    return(
        <div>
            <h2>Invalid Credentials</h2>
        </div>
    )
}


`;

    return (
        <div className="container mt-3">
            <h3>useState and useEffect Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
