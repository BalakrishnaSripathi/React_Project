
import {BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Footwear from "./Footwear"
import Fashion from "./Fashion"
import Electronics from "./Electronics"
export default function ShoppingIndex(){

    return(
        <div className="container-fluid">
              
            <h2>Shopping Index</h2>
             <a href="/fashion">Fashion</a><br></br>
              <a href="/footwear">Footwear</a><br/>
              <BrowserRouter>
              <Link to="/ele">Electronics</Link>
             
            <Routes>
                <Route path="/footwear" element={<Footwear/>}/>
                <Route path="/fashion" element={<Fashion/>}/>
                 <Route path="/ele" element={<Electronics/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}