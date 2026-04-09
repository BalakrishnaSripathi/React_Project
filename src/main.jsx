import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'jotai';
import JotaiApp from './components/jotai/JotaiApp.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TodoList from './components/reactQuery/TodoList.jsx';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import PostList from './components/reactQuery/PostList.jsx';
import TodoApp from './components/reactQuery/TodoApp.jsx';
import Counter from './components/zustand/Counter.jsx';
import Login from './components/zustand/LoginZustand.jsx';
import router from './components/routing/Routes.jsx';
import PRApp from './components/privateRouting/PRApp.jsx';
import JwtApp from './components/jwt/JwtApp.jsx';
import SwrApp from './components/swr/SwrApp.jsx';
import FrontedApp from './components/webSocket/Fronted.jsx';
import UseDebounceApp from './components/useDebounceHook/UseDebounceApp.jsx';
import UseLocalStorageApp from './components/useLocalStorageHook/UseLocalStorageApp.jsx';
import UploadImage from './components/uploadImgs/UploadImage.jsx';
import StatusComponent from './components/useOnlineStatus/StatusComponent.jsx';
//import App from './components/useMediaQuery/UseMediaQuery.jsx';
import GeolocationDisplay from './components/useGeolocation/GeolocationDisplay.jsx';
import LocationDetails from './components/useGeolocation/LocationDetails.jsx';
import HeroSection from './components/heroUI/HeroSection';
import { NextUIProvider } from "@nextui-org/react"
import AutoAnimateApp from './components/auto-animate/AutoAnimateApp.jsx';
import AnimatedLoginCard from './components/useSpring/AnimatedLoginCard.jsx';
import SpringShowcase from './components/useSpring/SpringShowcase.jsx';
import App from './App.jsx'
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(



 
  <CookiesProvider>
    <Provider>
      {/* <Provider store={Store}> */}
      {/* <IndexManagingComponent/> */}
      <QueryClientProvider client={queryClient}>

        {/* <PRApp/>
        <JwtApp/> */}
        {/* <SwrApp/> */}
         <BrowserRouter>
      <App />
    </BrowserRouter>
        {/* <GeolocationDisplay/> */}
        {/* <AnimatedLoginCard/>
        <SpringShowcase/>
        <LocationDetails/>
          <NextUIProvider>
          <HeroSection/>
          </NextUIProvider> */}


        { /* <FrontedApp/> */}
        {/* <TodoApp/> */}
      {/* <App/>
      <UseDebounceApp/>
      <UseLocalStorageApp/> */}
        <ReactQueryDevtools/>
      </QueryClientProvider>
      {/* </Provider> */}
    </Provider>  
  </CookiesProvider>
  
)
