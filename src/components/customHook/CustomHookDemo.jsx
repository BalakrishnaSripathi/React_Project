import { useFectchData } from "./useFetchData"

export default function CustomHookDemo(){
    const {data}=useFectchData("https://fakestoreapi.com/products")

return(
    <div className="container-fluid row">
        <h2>products</h2>
            {
                data.map(v=>
                    <div className="col-lg-6 col-md-12 col-sm-12  border-2 border-indigo-400" >
                    <img className="h-60 w-60 object-fill" src={v.image}  height="200px" />
                    <p className="bg-blue-100 font-bold border-1 border-amber-100">{v.title}</p>
                    </div>
                )
            }
    </div>
)
}