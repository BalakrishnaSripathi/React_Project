import React from 'react'
import Delhi from './Delhi'
import { GiftProvider } from './ExampleContext'

const ContexApp = () => {
    const gift='Apple'
  return (
    <div>
      <h1>Send Gift to Bangalore</h1>
      <GiftProvider>
        <Delhi/>
      </GiftProvider>
    </div>
  )
}

export default ContexApp
