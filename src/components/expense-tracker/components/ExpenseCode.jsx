export default function ExpenseCode() {
    const code = `
ExpenseApp.jsx:
---------------
import ExpenseFilter from './ExpenseFilter'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { useState } from 'react'
export const categories=['Utilities','Groceries','Entertainment']
const ExpenseApp = () => {
    const [selectedCategory,setSelectedCategory]=useState('')
    const[expenses,setExpenses]= useState([
        {id:1 ,description:'aaa',amount:10,category:'Utilities'},
        {id:2 ,description:'bbb',amount:50,category:'Groceries'},
        {id:3 ,description:'ccc',amount:40,category:'Utilities'},
        {id:4 ,description:'ddd',amount:20,category:'Groceries'},
         {id:5 ,description:'eee',amount:34,category:'Entertainment'},
    ])
    const VisibleExpenses=selectedCategory? expenses.filter(e=>e.category===selectedCategory):expenses;
  return (
    <div>
    <div className="mb-5">
      <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>  
    </div>
    <ExpenseFilter onselectCategory={category=>setSelectedCategory(category)}/>
      <ExpenseList expenses={VisibleExpenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id!==id))}/>
    </div>
  )
}

export default ExpenseApp

ExpenseList.jsx:
----------------
const ExpenseList = ({expenses,onDelete}) => {
    if (expenses.length===0) return null;
  return (
    <table className="table table-border">
    <thead>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {
            expenses.map(expense=><tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button className='btn btn-outline-danger' onClick={()=>onDelete(expense.id)}>Delete</button>
                </td>

            </tr>)
        }
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td> {expenses
              .reduce((acc, expense) => acc + Number(expense.amount), 0)
              }</td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
    </table>
  )
}

export default ExpenseList

ExpenseFilter:
-------------
const ExpenseFilter = ({onselectCategory}) => {
  return (
    <select className='form-select' onChange={(event)=>onselectCategory(event.target.value)}>
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default ExpenseFilter


ExpenseForm:
------------
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

`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
