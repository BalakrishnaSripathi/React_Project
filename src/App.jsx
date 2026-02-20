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
import UseRefHookCode from './components/useRef/UseRefHookCode'
import UseRefHook from './components/useRef/UseRefHook'
import TailwindCode from './components/tailwindCss/TailwindCode'
import TailwindDemo from './components/tailwindCss/TailwindDemo'
import MaterialUiCode from './components/materialUi/MaterialUiCode'
import MaterialUiComponent from './components/materialUi/MaterialUiComponent'
import ReduxStoreCode from './components/reduxStore/ReduxStoreCode'
import ReduxApp from './components/reduxStore/ReduxApp'
import UseMemoCode from './components/useMemo/UseMemoCode'
import UseMemoComponent from './components/useMemo/UseMemoComponent'
import UseCallbackCode from './components/useCallback.jsx/UseCallbackCode'
import UseCallbackComponent from './components/useCallback.jsx/UseCallbackComponent'
import HocCode from './components/hoc/HocCode'
import AuthDashboard from './components/hoc/Dashboard.jsx';
import ContextAPICode from './components/contextAPI/ContexAPICode.jsx'
import Home from './components/contextAPI/Home.jsx'
import UseLayoutCode from './components/useLayoutEffect/UseLayoutCode.jsx'
import UseLayout from './components/useLayoutEffect/UseLayout.jsx'
import UseDebugCode from './components/useDebugValue/UseDebugCode.jsx'
import UseDebugValue from './components/useDebugValue/UseDebugValue.jsx'
import UseTransitionCode from './components/useTransitionHook/UseTransitionCode.jsx'
import UseTransitionHook from './components/useTransitionHook/UseTransitionHook.jsx'
import CurdCode from './components/crud/CurdCode.jsx'
import UserPage from './components/crud/pages/UserPage.jsx'
import UseImaperativeHookCode from './components/useImperativeHandleHook/UseImaperativeHookCode.jsx'
import UseImperativeHandleHook from './components/useImperativeHandleHook/UseImperativeHandleHook.jsx'
import UseIdHookCode from './components/useIdHook/UseIdHookCode.jsx'
import UseIdHook from './components/useIdHook/UseIdHook.jsx'

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

            <Route path='/UseRef' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseRefHookCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseRefHook/>
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


            <Route path='/Tailwind' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <TailwindCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <TailwindDemo/>
                </div>
            </div> }/>

            <Route path='/MaterialUi' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <MaterialUiCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <MaterialUiComponent/>
                </div>
            </div> }/>


            <Route path='/Redux' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ReduxStoreCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <ReduxApp/>
                </div>
            </div> }/>


            <Route path='/UseMemo' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseMemoCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseMemoComponent/>
                </div>
            </div> }/>


            <Route path='/UseCallBack' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseCallbackCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseCallbackComponent/>
                </div>
            </div> }/>

            <Route path='/Hoc' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <HocCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <AuthDashboard/>
                </div>
            </div> }/>


            <Route path='/CAPI' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <ContextAPICode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <Home/>
                </div>
            </div> }/>


             <Route path='/UseLayout' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseLayoutCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseLayout/>
                </div>
            </div> }/>

            <Route path='/UseDebug' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseDebugCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseDebugValue/>
                </div>
            </div> }/>


            <Route path='/UseTransition' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseTransitionCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseTransitionHook/>
                </div>
            </div> }/>

            
            <Route path='/Crud' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <CurdCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UserPage/>
                </div>
            </div> }/>

            <Route path='/UseImperativeHandleHook' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseImaperativeHookCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseImperativeHandleHook/>
                </div>
            </div> }/>

            <Route path='/UseId' element={
            <div className="row">
                <div className="col-md-6 border">
                    <h5 className="text-center">Code</h5>
                    <UseIdHookCode/>
                </div>
                <div className="col-md-6 border">
                    <h5 className="text-center">Output</h5>
                    <UseIdHook/>
                </div>
            </div> }/>



          </Routes>
        </div>
    </>
  )
}

export default App
