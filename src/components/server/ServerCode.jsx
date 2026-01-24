export default function ServerCode() {
    const code = `import express from "express";
    import cors from "cors";
    import { MongoClient } from "mongodb";
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    const client = new MongoClient("mongodb://127.0.0.1:27017/");
    let db;
    
    // connect ONCE
    async function connectDB() {
        await client.connect();
        db = client.db("reactdb");
        console.log("MongoDB Connected");
    }
    connectDB();
    
    // GET users
    app.get("/getusers", async (req, res) => {
        try {
            const data = await db.collection("tblusers").find({}).toArray();
            res.json(data);
        } catch (err) {
            res.status(500).send(err);
        }
    });
    
    // POST user
    app.post("/registeruser", async (req, res) => {
        try {
            const userdetails = {
                UserId: req.body.UserId,
                UserName: req.body.UserName,
                Password: req.body.Password,
                Age: parseInt(req.body.Age),
                Mobile: req.body.Mobile,
                Subscribed: req.body.Subscribed === "true"
            };
    
            await db.collection("tblusers").insertOne(userdetails);
            res.redirect("/getusers");
    
        } catch (err) {
            res.status(500).send("Insert Failed");
        }
    });
    
    // LISTEN ONCE
    app.listen(4000, () => {
        console.log("Server running at http://127.0.0.1:4000");
    });
    


`;
const code2=`
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
}`
    return (
        <div className="container mt-3">
            <h3>Server Code</h3>
            <h2>Creating API</h2>
            <pre>
                <code>{code}</code>
            </pre>
            <h2>GET and POST</h2>
            <pre>
                <code>{code2}</code>
            </pre>
        </div>
    );
}
