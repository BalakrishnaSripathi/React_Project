import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div className="container mt-4">
            
            <div className="text-center mb-4">
                <h1 className="fw-bold">Welcome to React</h1>
                <p className="text-muted">React Concepts Navigation</p>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Component">Functional Component</Link>
                        </li>
                         <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ClassComponent">Class Component</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Props">Props</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/DataBinding">Data Binding</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/CustomHook">Custom Hook</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ReactHook">useState & useEffect</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/ContextHook">useContext Hook</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/UseReducer">useReducer</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Routing">Routing</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Server">Creating API (GET & POST)</Link>
                        </li>
                        
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/FormComponent">Form Component</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Yup">Yup Validation</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Cookies">Cookies</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="text-decoration-none" to="/Axios">Axios</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
