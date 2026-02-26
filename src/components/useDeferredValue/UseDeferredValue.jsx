import React from 'react'
import ProductsList from './ProductsList'

const UseDeferredValue = () => {
    const products=["Mother Boads","Hard Disk","SSD","Rams","Processors","Graphic cards"]
  return (
    <div>
      <ProductsList products={products}/>
    </div>
  )
}

export default UseDeferredValue
