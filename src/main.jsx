import { StrictMode, Suspense } from 'react'
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
import JwtApp from './components/jwt/JwtApp.jsx';
import SwrApp from './components/swr/SwrApp.jsx';
import FrontedApp from './components/webSocket/Fronted.jsx';
import UseDebounceApp from './components/useDebounceHook/UseDebounceApp.jsx';
import UseLocalStorageApp from './components/useLocalStorageHook/UseLocalStorageApp.jsx';
//import UploadImage from './components/uploadImgs/UploadImage.jsx';
import StatusComponent from './components/useOnlineStatus/StatusComponent.jsx';
//import App from './components/useMediaQuery/UseMediaQuery.jsx';
//import GeolocationDisplay from './components/useGeolocation/GeolocationDisplay.jsx';
import LocationDetails from './components/useGeolocation/LocationDetails.jsx';
//import HeroSection from './components/heroUI/HeroSection';
//import { NextUIProvider } from "@nextui-org/react"
//import SpringShowcase from './components/useSpring/SpringShowcase.jsx';
import App from './App.jsx' 
//import MarkdownApp from './components/markdown/MarkdownApp.jsx';
//import FramerMotionApp from './components/framer-motion/FramerMotionApp.jsx';
//import ImageUpload from './components/reactDnd/ImageUpload.jsx';
//import SuspenseApp from './components/suspense/SuspenseApp.jsx';
//import AntApp from './components/antDesing/AntApp.jsx';
import Carousel from './components/useAutoPlay/Carousel.jsx';
import CopyButton from './components/useCopy/CopyButton.jsx';
import { MantineProvider } from '@mantine/core';
//import StudentRegister from './components/mantine/StudentRegister.jsx';
import AhooksApp from './components/ahooks/AhooksApp.jsx';
import MyChart from './components/charts/MyChart.jsx';
import LineGraph from './components/charts/LineGraph.jsx';
import PieGraph from './components/charts/PieGraph.jsx';
import ChartApp from './components/charts/ChartApp.jsx';
import DraggableHome from './components/useGesture/DraggableHome.jsx';
import MovableList from './components/react-movable/MovableList.jsx';
import DndKitList from './components/dnd-kit/DndKitList.jsx';
import HelmetHome from './components/helmet/Helmet.jsx';
import UseDropzone from './components/useDropzone/UseDropzone.jsx';
import FadeCard from './components/react-intersection-observer/FadeCard.jsx';
import Dashboard from './components/SecureLocalStorageHook/Dashboard.jsx';
import ReactAuthKitFlow from './components/reactAuthKitFlow/ReactAuthKitFlow.jsx';
import Shop from './components/reactUseCart/Shop.jsx';
import MediaHooksDemo from './components/mediaHooksDemo/MediaHooksDemo.jsx';
import ReactWaypointDemo from './components/ReactWaypoint/ReactWaypointDemo.jsx';
//import LazyImage from './components/react-intersection-observer/LazyImage.jsx';
import SwiperApp from './components/swiper/SwiperApp.jsx';
import UseHookApp from './components/usehooks-ts/UseHookApp.jsx';
import DocumentUpload from './components/fileUpload/DocumentUpload .jsx';
import DocumentList from './components/fileUpload/DocumentList.jsx';
import QRCodeGenerator from './components/qRCodeGenerator/QRCodeGenerator.jsx';
import QRCodeExample from './components/react-oauth-google/QRCodeExample.jsx';
import SweetalertApp from './components/sweetalert2/sweetalert.jsx';
import SkeletonApp from './components/loading-skeleton/SkeletonApp.jsx';
import AosApp from './components/aos/AosApp.jsx';
import SonnerApp from './components/sonner/SonnerApp.jsx';


const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(


 
  <CookiesProvider>
    <Provider>
      {/* <Provider store={Store}> */}
      {/* <IndexManagingComponent/> */}
      <QueryClientProvider client={queryClient}>

        {/* <PRApp/> */}
        {/* <JwtApp/>  */}
        {/* <SwrApp/> */}
         <BrowserRouter>
         
         
          {/* <MarkdownApp/>
          <FramerMotionApp/> */}
          {/* <ImageUpload/> */}
          {/* <SuspenseApp/> */}
           <MantineProvider withNormalizeCSS withGlobalStyles>

    </MantineProvider>
    <SonnerApp/>
    <AosApp/>
    <SkeletonApp/>
    <SweetalertApp/>

    <QRCodeExample/>

       
    <DocumentUpload/>
    <DocumentList/>
     {/* <DraggableHome/>  */}
    <MovableList/> 
    {/* <LazyImage/> */}
    {/* <ReactWaypointDemo/>
    <MediaHooksDemo/> */}
    <SwiperApp/>
    <UseHookApp/>
    <ReactAuthKitFlow/>
    <Shop/>
    <Dashboard/>
    <FadeCard/>
    <UseDropzone/>
    <HelmetHome/>
    <DndKitList/>
    <ChartApp/>
    <AhooksApp/>

          <CopyButton/>
          <Carousel/>
           <LocationDetails/>
               <UseLocalStorageApp/> 
       <App/> 
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
