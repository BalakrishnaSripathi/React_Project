import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Formik,useFormik } from 'formik';

export default function JQueryAjaxDemo(){
    const [users,setusers]=useState([]);

    const formik =useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            Mobile:'',
            Subscribed:false,
        },
        onSubmit:values=>{
            alert(JSON.stringify(values));
            $.ajax({
                method:"POST",
                url:"http://127.0.0.1:4000/registeruser",
                data:values
            })
            alert("Registered successfully..")
        }
        
    }) 

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://127.0.0.1:4000/getusers",
            success:function(response) {
                  setusers(response) ; 
                }

        })


    },[])

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
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
            </form>




            <h2>user Details</h2>
            <ol>
                {
                    users.map(u=>
                        <li>{u.UserName}</li>
                    )
                }
            </ol>


        </div>
    )
}