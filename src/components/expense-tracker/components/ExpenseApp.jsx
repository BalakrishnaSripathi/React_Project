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
