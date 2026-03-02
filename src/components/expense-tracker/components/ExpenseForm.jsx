import { reset } from '../../reduxStore/slices/ReduxCounterSlice';
import { categories } from './ExpenseApp'
import { useForm } from "react-hook-form";
const ExpenseForm = ({onSubmit}) => {
    
const { register, handleSubmit,reset, formState: { errors } } = useForm();

   
  return (
    <form onSubmit={handleSubmit(data=>{
        onSubmit(data);
        reset();
    })}>
        <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input {...register("description", { required: true })} type="text"  id='description' className="form-control" />
        </div>
        {errors.description && <p>Disription is required</p>}

        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input  {...register("amount", { required: true })}  id='amount' type="number" className="form-control" />
            </div>
            {errors.amount && <p>Amount is required</p>}
        <div className="mb-3">
            <label htmlFor="" className="form-label">Categories</label>
            <select  {...register("category")} id="category" className="form-select">
            <option>All categories</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}
            </select>
            </div>
            <button type='submit' className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ExpenseForm
