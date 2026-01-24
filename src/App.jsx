import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Index from './components/Index'
import DataBindingComponent from './components/data_Binding/DataBindingComponent'
import ReducerDemo from './components/useReducer/ReducerDemo'
import CustomHookDemo from './components/customHook/CustomHookDemo'
import JQueryAjaxDemo from './components/server/jQueryAjaxDemo'
import AxiosDemo from './components/axios/AxiosDemo'
import ShoppingIndex from './components/routing/ShoppingIndex'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SpaComponent from './components/routing/SpaComponent'
import DataBindingCode from './components/data_Binding/DataBindingCode'
import AxiosCode from './components/axios/AxiosCode'
import CustomHookCode from './components/customHook/CustomHookCode'
import RoutingCode from './components/routing/RoutingCode'
import ServerCode from './components/server/ServerCode'
import UseReducerHokokCode from './components/useReducer/UseReducerHookCode'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*
    <JQueryAjaxDemo/>
    <AxiosDemo/>
    <ShoppingIndex/>
    */} 
    <div className="container mt-3">
        <Routes>
          <Route path='/'element={<Index/>}/>
          <Route path='/DataBinding' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <DataBindingCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <DataBindingComponent/>
                </div>
            </div> }/>

            <Route path='/Axios' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <AxiosCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <AxiosDemo/>
                </div>
            </div> }/>

            <Route path='/CustomHook' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <CustomHookCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <CustomHookDemo/>
                </div>
            </div> }/>

            <Route path='/Routing' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <RoutingCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                  
                </div>
            </div> }/>

            <Route path='/Server' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ServerCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <JQueryAjaxDemo/>
                </div>
            </div> }/>

            <Route path='/UseReducer' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseReducerHokokCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ReducerDemo/>
                </div>
            </div> }/>




          </Routes>
        </div>
    </>
  )
}

export default App
