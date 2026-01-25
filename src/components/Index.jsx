export default function Index() {
    return (
        <div className="container mt-4">
            
            <div className="text-center mb-4">
                <h1 className="fw-bold">Welcome to React</h1>
                <p className="text-muted">React Concepts Navigation</p>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <ol className="list-group list-group-flush">
                    
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Component">Functional Component</a>
                        </li>
                         <li className="list-group-item">
                            <a className="text-decoration-none" href="/ClassComponent">Class Component</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/DataBinding">Data Binding</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/CustomHook">Custom Hook</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Routing">Routing</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Server">Creating API (GET & POST)</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/UseReducer">useReducer</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/FormComponent">Form Component</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Yup">Yup Validation</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/ReactHook">useState & useEffect</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Cookies">Cookies</a>
                        </li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href="/Axios">Axios</a>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
}
