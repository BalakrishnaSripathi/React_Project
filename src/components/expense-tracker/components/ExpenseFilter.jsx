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
