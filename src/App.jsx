import { useState } from 'react'
import Index from './components/Index'
import DataBindingComponent from './components/data_Binding/DataBindingComponent'
import ReducerDemo from './components/useReducer/ReducerDemo'
import CustomHookDemo from './components/customHook/CustomHookDemo'
import JQueryAjaxDemo from './components/server/jQueryAjaxDemo'
import AxiosDemo from './components/axios/AxiosDemo'
import ShoppingIndex from './components/routing/ShoppingIndex'
import {Link, Route, Routes } from 'react-router-dom'
import SpaComponent from './components/routing/SpaComponent'
import DataBindingCode from './components/data_Binding/DataBindingCode'
import AxiosCode from './components/axios/AxiosCode'
import CustomHookCode from './components/customHook/CustomHookCode'
import RoutingCode from './components/routing/RoutingCode'
import ServerCode from './components/server/ServerCode'
import UseReducerHokokCode from './components/useReducer/UseReducerHookCode'
import Footwear from './components/routing/Footwear'
import Fashion from './components/routing/Fashion'
import Electronics from './components/routing/Electronics'
import FormComponentCode from './components/Forms/FormComponentCode'
import FormComponent from './components/Forms/FormComponent'
import YupValidationComponentCode from './components/Forms/YupValidationComponentCode'
import YupValidationComponent from './components/Forms/YupValidationComponent'
import ReactHookDemoCode from './components/React Hooks/ReactHookDemoCode'
import ReactHookDemo from './components/React Hooks/ReactHookDemo'
import CookiesCode from './components/React Hooks/CookiesCode'
import UserLog from './components/React Hooks/Cookies'
import Component from './components/component/Component'
import ComponentCode from './components/component/ComponentCode'
import ClassComponentCode from './components/component/ClassComponentCode'
import ClassComponent from './components/component/ClassComponent'
import PropsCode from './components/props/PropsCode'
import ParentComponent from './components/props/PropsComponent'
import COntextDemoCode from './components/useContext/ContextDemoCode'
import ContextDemo from './components/useContext/ContextDemo'
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering'
import ConditionalRenderingCode from './components/ConditionalRendering/ConditionalRenderingCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mt-3">
        <Routes>
          <Route path='/'element={<Index/>}/>

          <Route path='/Component' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ComponentCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <Component/>
                </div>
            </div> }/>

            <Route path='/ClassComponent' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ClassComponentCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ClassComponent/>
                </div>
            </div> }/>

            <Route path='/Props' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <PropsCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ParentComponent/>
                </div>
            </div> }/>
            
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

            <Route path='/ConditionalRendering' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ConditionalRenderingCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ConditionalRendering/>
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


            <Route path='/ContextHook' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <COntextDemoCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ContextDemo/>
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
                    <ShoppingIndex/>
                  

                </div>
            </div> }>
                            <Route path="footwear" element={<Footwear/>}/>
                            <Route path="fashion" element={<Fashion/>}/>
                             <Route path="ele" element={<Electronics/>}/>
                  </Route>



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

             <Route path='/FormComponent' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <FormComponentCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <FormComponent/>
                </div>
            </div> }/>


            <Route path='/Yup' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <YupValidationComponentCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <YupValidationComponent/>
                </div>
            </div> }/>


             <Route path='/ReactHook' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ReactHookDemoCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ReactHookDemo/>
                </div>
            </div> }/>


            <Route path='/Cookies' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <CookiesCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UserLog/>
                </div>
            </div> }/>




          </Routes>
        </div>
    </>
  )
}

export default App
