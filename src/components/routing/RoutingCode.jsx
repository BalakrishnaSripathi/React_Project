export default function RoutingCode() {
    const code = `
export default function Electronics (){

    return(
        <div>
            <h2>Electronics Home</h2>
        </div>
    )
}
`;
const code2=`
export default function Fashion (){

    return(
        <div>
            <h2>Fashion Home</h2>
        </div>
    )
}
`;
const code3=`
export default function Footwear(){

    return(
        <div>
            <h2>FootWear Home</h2>
        </div>
    )
}
`;
const code4=`

import {BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Footwear from "./Footwear"
import Fashion from "./Fashion"
import Electronics from "./Electronics"
export default function ShoppingIndex(){

    return(
        <div className="container-fluid">
              <BrowserRouter>
            <h2>Shopping Index</h2>
             <a href="/fashion">Fashion</a><br></br>
              <a href="/footwear">Footwear</a><br/>
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
`;
const code5=`
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

export default function SpaComponent(){
     function JavaScript(){
        return(
            <div>
                <p>This JavaScript Function</p>
            </div>
        )
    }

    return (
        <div>
            <BrowserRouter>
            <nav>
                <ul>
               <li> <Link to="/html">Html</Link></li>
               <li> <Link to="/css">Css</Link></li>
               <li><Link to="/js">JavaScript</Link></li>
                </ul>
            </nav>
            <hr />
            <Routes>
                <Route path="/html" element={
                <div>
                    <p>This is html Element</p>
                </div>
                }/>
            <Route path="/css" element={
                <div>
                    <p>This is Css Element</p>
                </div>
            }/>

            <Route path="/js" element={<JavaScript/>}/>

            </Routes>

            </BrowserRouter>
        </div>
    )
}
`

    return (
        <div className="container mt-3">
            <h3> Routing Code</h3>
            <h2>Electronics.jsx</h2>
            <pre>
                <code>{code}</code>
            </pre>
            <h2>Fashion.jsx</h2>
            <pre>
                <code>{code2}</code>
            </pre>
            <h2>Footwear.jsx</h2>
            <pre>
                <code>{code3}</code>
            </pre>
            <h2>ShoppingIndex.jsx</h2>
            <pre>
                <code>{code4}</code>
            </pre>
            <h2>SpaComponent.jsx</h2>
            <pre>
                <code>{code5}</code>
            </pre>
        </div>
    );
}
