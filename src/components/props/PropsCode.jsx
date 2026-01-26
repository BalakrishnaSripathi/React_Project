export default function PropsCode() {
    const code = `
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


//ChaildComponent.jsx
    export default function ChaildComponent(props){

    return(
        <div>
       <p>
            <h3>Name:{props.name.Name}</h3>
            Place:{props.name.Place}
            </p>
        </div>
    )

}


`;

    return (
        <div className="container mt-3">
            <h3>Props Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
