import React from 'react'
import LineGraph from './LineGraph'
import MyChart from './MyChart'
import PieGraph from './PieGraph'
import AreaGraph from './AreaGraph'
import ScatterGraph from './ScatterGraph'

const ChartApp = () => {
  return (
    <>
    <h1>Chart In React</h1>
    <hr />
    <div className='grid grid-cols-3 gap-5'>
      <LineGraph/>
      <MyChart/>
      <PieGraph/>
      <AreaGraph/>
      <ScatterGraph/>
    </div>
    </>
  )
}

export default ChartApp
