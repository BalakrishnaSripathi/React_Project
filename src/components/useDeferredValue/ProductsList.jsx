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
