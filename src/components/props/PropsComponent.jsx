import ChaildComponent from "./Chaild"

export default function ParentComponent(){
    const user={
        Name:"Balu",
        Place:"Nalgonda"
    }
    return(
        <div>
            <ChaildComponent name={user}/>
        </div>
    )
}