import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/Index'
import DataBindingComponent from './components/data_Binding/DataBindingComponent'
import ReducerDemo from './components/useReducer/ReducerDemo'
import CustomHookDemo from './components/customHook/CustomHookDemo'
import JQueryAjaxDemo from './components/server/jQueryAjaxDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <JQueryAjaxDemo/>

    </>
  )
}

export default App
