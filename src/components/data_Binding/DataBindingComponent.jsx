import DataBindingCode from "./DataBindingCode";

export default function DataBindingComponent(){
    var products = [
        {Name: 'Samsung TV', Price: 56000.44},
        {Name: 'Nike Casuals', Price: 4200.44}
    ];
    return(
        <div className="container">
            <DataBindingCode/>
            <h2>OutPut:</h2>
            <h3>Products Table</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
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

