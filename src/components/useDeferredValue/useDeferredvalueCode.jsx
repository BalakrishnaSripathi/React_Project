export default function UseDeferredValueCode() {
    const code = `
useDeferredValue Hook:
---------------------
useDeferredValue is a React Hook that lets you delay updating a value so your UI stays smooth and responsive during expensive renders.

It is mainly used for:
🔍 Search filtering
📊 Large lists rendering
🧠 Heavy computations

Imagine:
You type in a search box
On every key press, 10,000 items are filtered
UI becomes slow 😓
👉 Instead of updating list immediately, React:
Updates input instantly
Delays list rendering
Keeps typing smooth

UseDefferedValue.jsx
---------------------
import React from 'react'
import ProductsList from './ProductsList'

const UseDefferedValue = () => {
    const products=["Mother Boads","Hard Disk","SSD","Rams","Processors","Graphic cards"]
  return (
    <div>
      <ProductsList products={products}/>
    </div>
  )
}

export default UseDefferedValue

ProductsList.jsx:
-----------------

import React, { useDeferredValue, useState } from 'react'

const ProductsList = ({products}) => {
    const [search,setSearch]=useState("");
    const deferredSearch=useDeferredValue(search)
    const filterdproducts=products.filter((product)=>product.toLowerCase().includes(deferredSearch.toLowerCase()))
  return (
    <div>
        <input className='border-2 border-black rounded-2' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Product' />
        <ul>
        {
            filterdproducts.map((product,index)=>(
                <li key={index}>{product}</li>
            ))
        }
        </ul>
      
    </div>
  )
}

export default ProductsList


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
