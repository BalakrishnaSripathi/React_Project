import {useRef} from 'react'
import UseAddTodo from './UseAddTodo'


const TodoForm = () => {
    const ref=useRef(null)
    const addTodo=UseAddTodo(()=>{
        if (ref.current) ref.current.value='';
    })


  return (
    <>
    {addTodo.error && <div className='alert alert-danger'>{addTodo.error.message}</div>}
    <form className='row mb-3' onSubmit={event=>{event.preventDefault();
        addTodo.mutate({
            id:0,
            title:ref.current.value,
            userId:1
        })
    }}>
        <div className='col'>
            <input ref={ref} type='text' className='form-control'/>
        </div>
        <div className='col'>
            <button disabled={addTodo.isLoading} className='btn btn-primary'>{addTodo.isLoading ? 'Adding..':'Add'}</button>
        </div>
    </form>
    </>
  )
}

export default TodoForm
