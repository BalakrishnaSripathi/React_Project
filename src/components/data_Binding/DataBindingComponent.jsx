import DataBindingCode from "./DataBindingCode";
import DataBindingText from "./DataBindingText";

export default function DataBindingComponent(){
    var products = [
        {Name: 'Samsung TV', Price: 56000.44},
        {Name: 'Nike Casuals', Price: 4200.44}
    ];
    return(
        <div className="container row">
            <div><DataBindingText/></div>
            <div className="col-6">
            <h3>OutPut:</h3>
            <h4>Products Table</h4>
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
        </div>
    )
}

