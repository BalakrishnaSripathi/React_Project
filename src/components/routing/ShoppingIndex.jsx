
import {BrowserRouter,Routes,Route,Link, Outlet } from "react-router-dom"
import Footwear from "./Footwear"
import Fashion from "./Fashion"
import Electronics from "./Electronics"
export default function ShoppingIndex(){

    return(
        <div className="container-fluid">
          
            <h2>Shopping Index</h2>
                <nav>
              <Link to="fashion">Fashion</Link><br/>
              <Link to="footwear">Footwear</Link><br/>
              <Link to="ele">Electronics</Link>
             
        </nav>
        <hr />
        <Outlet/>
       
        </div>
    )
}