import { useId, useState } from "react";
const Arrays = () => {
    const code=`const [names,setName]=useState(['Ramu','raju'])
    setName([...names,'newName'])
    setName(names.filter(name=>name!=='raju'))
    setName(names.map(name=>name=='raju' ? 'ravi':name))
`;
    const [names,setNames]=useState(['Ramu','raju'])
    const [name,setName]=useState('');
    const [oldName,setOldNmae]=useState('')
     const userId=useId();

     function addName(){
        setNames([...names,name])
        setName('')
     }

     function deleteName(){
        setNames(names.filter(nam=>nam!==name))
     }

     function updateName(){
        setNames(names.map(nam=>nam==oldName?name:nam))
     }

  return (
    <div>
       <pre><code>{code}</code></pre> 
       <div>
        <h2>Names</h2>
            <ul>
            {
                names.map((nam)=>
                    <li key={nam}>{nam}</li>
                )
            }
            </ul>
       </div>

       <div>
        <label className="w-28" htmlFor={userId}>ADD Name:</label>
        <input className="border-2 border-black rounded-2 px-1 py-1 flex-1" type="text" id={userId}  onChange={(e)=>setName(e.target.value)} required />
        <button className="btn btn-primary" onClick={addName}>Add Name</button>
       </div>

       <div>
        <label className="w-28" htmlFor={userId}>Delete Name:</label>
        <input className="border-2 border-black rounded-2 px-1 py-1 flex-1" type="text" id={userId} onChange={(e)=>setName(e.target.value)} required />
        <button className="btn btn-primary" onClick={deleteName}>Delete Name</button>
       </div>

       <div>
                <label className="w-28" htmlFor={userId}>Old Name:</label>
        <input className="border-2 border-black rounded-2 px-1 py-1 flex-1" type="text" id={userId}  onChange={(e)=>setOldNmae(e.target.value)} required />
        <label className="w-28" htmlFor={userId}>New Name:</label>
        <input className="border-2 border-black rounded-2 px-1 py-1 flex-1" type="text" id={userId}  onChange={(e)=>setName(e.target.value)} required />
        <button className="btn btn-primary" onClick={updateName}>Update Name</button>
       </div>

       

       
       
    </div>
  )
}

export default Arrays
