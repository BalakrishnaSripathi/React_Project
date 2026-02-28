import { useForm} from 'react-hook-form'
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  age: z.number().min(18, "Age must be 18+")
})

const UseFormHook = () => {
    const {register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id='name' type="text" className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input {...register('age')} id='age' type="number" className="form-control" />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default UseFormHook
