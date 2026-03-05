import { counterAtom } from './Atoms'
import { useAtom } from 'jotai'
const Counter = () => {
    const[_,setCount]=useAtom(counterAtom)
  return (
    <div>
      <button className="btn btn-outline-primary w-16" onClick={()=>setCount((prev)=>prev+1)}>Inc</button>
      <button className="btn btn-outline-danger w-16" onClick={()=>setCount((prev)=>prev-1)}>Dec</button>
    </div>
  )
}

export default Counter
