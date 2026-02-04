import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

const IShopDashboard = () => {
    let navigate=useNavigate()
    const[cookies,setCookie,removeCookie]=useCookies();
    const [userid,setUserid]=useState();

    useEffect(()=>{
        if (cookies["userid"]==undefined){
            navigate("/login")
        }
        else{
        setUserid(cookies["userid"])
        }
    })
    function handlesignout(){
        removeCookie("userid")
        navigate("/login")
    }

  return (
    <div>
      <h2>User Dashbord {userid}</h2>-
      <button className='btn btn-link' onClick={handlesignout}>signout</button>
    </div>
  )
}

export default IShopDashboard
