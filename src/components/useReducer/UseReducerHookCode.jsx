export default function UseReducerHokokCode() {
    const code = `
import { useEffect, useReducer, useState } from "react";

var initialState= {likes :0,dislikes:0};

function reducer (state,action){
    switch(action.type)
    {
        case 'like':
            return {likes:state.likes +1,dislikes:state.dislikes};
        case 'dislike':
            return {dislikes: state.dislikes +1,likes:state.likes};

    }

}
export default function ReducerDemo(){
    const[state,disptach]=useReducer(reducer,initialState);
    const [product,setProduct]=useState({});

    useEffect(()=>{
        fetch("http://fakestoreapi.com/products/2")
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setProduct(data);
        })

    },[])

    function handleLikeClick(){
        disptach({type:'like'})

    }
    function handleDiLikeClick(){
        disptach({type:'dislike'})
    }

    return(
        <div className="container-fluid">
            <h2> Product Details</h2> 
           
            <div className="card p-2" style={{width:"300px"}}                       >
                <img src={product.image} className="card-img-top" height= "160"/>
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer">
                [{state.likes}]  <button onClick={handleLikeClick} className="btn btn-primary">Like</button>
                [{state.dislikes}]<button onClick={handleDiLikeClick} className="btn btn-danger">DiLike</button>
                </div>

            </div>
           
        </div>
    )


}

`;

    return (
        <div className="container mt-3">
            <h3>UseReducer Hook Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
