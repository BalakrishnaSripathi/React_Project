import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/Index'
import DataBindingComponent from './components/data_Binding/DataBindingComponent'
import ReducerDemo from './components/useReducer/ReducerDemo'
import CustomHookDemo from './components/customHook/CustomHookDemo'
import JQueryAjaxDemo from './components/server/jQueryAjaxDemo'
import AxiosDemo from './components/axios/AxiosDemo'
import ShoppingIndex from './components/routing/ShoppingIndex'
import { BrowserRouter } from 'react-router-dom'
import SpaComponent from './components/routing/SpaComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*
    <JQueryAjaxDemo/>
    <AxiosDemo/>
    <ShoppingIndex/>
    */}
    
     <SpaComponent/>
   
   
    </>
  )
}

export default App
