export default function IShopCodeCode() {
    const code = `
useNavigate Hook:
-----------------
useNavigate is used for programmatic navigation 
(redirecting using JavaScript instead of clicking a link).

Why We Use useNavigate?

Redirect after login
Redirect after form submit
Go back to previous page
Navigate based on conditions

useParams Hook:
--------------
useParams is used to get dynamic values from the URL.
It is mainly used when your route contains URL parameters.

Returns string values
Works only inside <BrowserRouter>
Used for dynamic routing
Used with REST API endpoints


import {useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

const IshopRegister = () => {
    let navigate=useNavigate();
    const formik =useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            Mobile:'',
            Subscribed:true,
        },
        onSubmit:values=>{
            axios.post("http://127.0.0.1:4000/registeruser",values);
            alert("Register Successfully");
            navigate("/login")
        }

    })  
  return (
    <div className="container-fluid">
      <h2>Register new user</h2>
      <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type='text' value={formik.values.UserId} onChange={formik.handleChange} name='UserId'/></dd>
                    <dt>User Name</dt>
                    <dd><input type='text' value={formik.values.UserName} onChange={formik.handleChange} name='UserName'/></dd>
                    <dt>Password</dt>
                    <dd><input type='password' value={formik.values.Password} onChange={formik.handleChange} name='Password'/></dd>
                    <dt>Age</dt>
                    <dd><input type='number' value={formik.values.Age} onChange={formik.handleChange} name='Age'/></dd>
                    <dt>Mobile</dt>
                    <dd><input type='text' value={formik.values.Mobile} onChange={formik.handleChange} name='Mobile'/></dd>
                    <dt>Subscription</dt>
                    <dd><input type='checkbox' checked={formik.values.Subscribed} onChange={formik.handleChange} name='Subscribed'/>Yes</dd>
                </dl>
                <button className='btn btn-primary'>Register</button>
                <br />
                <Link to="/login">Already have account?</Link>
            </form>
             
     
    </div>
  )
}

export default IshopRegister
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const IshopProductDetails = () => {
    const[product,setProducts]=useState({});
    let params=useParams();

    useEffect(()=>{
        axios.get(http://127.0.0.1:4000/getproduct/{params.id})
        .then(response=>{
            setProducts(response.data[0]);
        })
    },[])
  return (
    <div>
      <h2>Product Details-{params.id}</h2>
      <dl>
      <dt>Title</dt>
      <dd>{product.title}</dd>
      <dt>Price</dt>
      <dd>{product.price}</dd>
      <dt>Preview</dt>
      <dd><img src={product.image} width="100" height="100" alt="" /></dd>
      <dt>Rating</dt>
     
      </dl>
      <br />
     <Link to={"/products/"+product.category}>return to categories</Link>
    </div>
  )
}

export default IshopProductDetails




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
