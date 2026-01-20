export default function DataBindingCode() {
    const text=`Data Binding is technique that defines how data is binded to UI[View]
    -React can handle data binding by using binding expression and simple collection methods.
    -React data Binding Expression 
    "{ }".
    `
    const code = `
export default function DataBindingComponent(){
    var products = [
        {Name: 'Samsung TV', Price: 56000.44},
        {Name: 'Nike Casuals', Price: 4200.44}
    ];
    return(
        <div className="container">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
`;

    return (
        <div className="container mt-3">
            <h3>Data Binding Component Notes</h3>
            <pre>
                <code>{text}</code>
            </pre>
            <h3>Data Binding Component Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
