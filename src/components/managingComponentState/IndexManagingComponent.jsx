import React from 'react'
import ManagingComponent from './ManagingComponent'
import UpdatingState from './UpdatingState'
import Arrays from './Arrays'
import Arrays2 from './Arrays2'

const IndexManagingComponent = () => {
  return (
    <div>
    <div>
        <h1>Pure Component & Impure Component</h1>
        <hr />
      <ManagingComponent/>
      <ManagingComponent/>
      <ManagingComponent/>
      <h5 className='mt-4'>note:Impure component changing the output</h5>
        </div>
        <div className='mt-5'>
            <h1>Updating State</h1>
            <hr />
            <UpdatingState/>
        </div>
        <div className='mt-5'>
            <h1>Upatating array data</h1><hr />
           <Arrays/>
           <Arrays2/>
        </div>

    </div>
  )
}

export default IndexManagingComponent
