import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const IshopProducts = () => {
    const[category,setCategories]=useState();
    const [products,setProducts]=useState([]);
    let params=useParams();
    useEffect(()=>{
        setCategories(params.category);
        axios.get("http://127.0.0.1:4000/getproducts")
        .then(response=>{
            setProducts(response.data)
        })
    },[])
  return (
    <div>
      <h2>{category} List</h2>
      <ol>
        {
            products.filter(item=>item.category==category).map(product=>
                <li key={product.id}>
                    <img src={product.image} width="50" height="50" alt="" />
                   <div><Link to={"/details/"+product.id}>{product.title}</Link></div>
                    </li>
            )
        }
      </ol>
      <div>
        <Link to="/dashboard">back to categories</Link>
      </div>
    </div>
  )
}

export default IshopProducts
