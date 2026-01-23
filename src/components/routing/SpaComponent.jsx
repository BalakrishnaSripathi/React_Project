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