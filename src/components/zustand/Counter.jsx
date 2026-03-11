import Login from './LoginZustand'
import useStore from './store'


const Counter = () => {
    const {count,increment,decrement,reset}=useStore()
  return (
    <div className='card p-4 text-center d-flex align-items-center justify-content-center'>
        <div>
    <button onClick={decrement} className='m-3 btn btn-outline-danger w-20 '>-</button>
    {count}
      <button onClick={increment} className=' m-3 btn btn-outline-primary w-20'>+</button>
      </div>
      <div>
        <button onClick={reset} className='btn btn-outline-secondary w-20'>Reset</button>
      </div>
      </div>
      
  )
}

export default Counter
