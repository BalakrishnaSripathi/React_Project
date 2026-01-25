import { useFectchData } from "./useFetchData"

export default function CustomHookDemo(){
    const {data}=useFectchData("https://fakestoreapi.com/products")

return(
    <div className="container-fluid row">
        <h2>products</h2>
            {
                data.map(v=>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 " >
                    <div className="card p-2 " style={{width:"300px"}}>
                    <img src={v.image}  height="200px" />
                    {v.title}
                    </div>
                    </div>
                )
            }
    </div>
)
}