// import { StrictMode, Suspense } from 'react'
// import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
// import { BrowserRouter, RouterProvider } from 'react-router-dom';
// import { CookiesProvider } from 'react-cookie';
// import { Provider } from 'jotai';
// import JotaiApp from './components/jotai/JotaiApp.jsx';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import TodoList from './components/reactQuery/TodoList.jsx';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
// import JwtApp from './components/jwt/JwtApp.jsx';
// import SwrApp from './components/swr/SwrApp.jsx';
// import FrontedApp from './components/webSocket/Fronted.jsx';
// import UseDebounceApp from './components/useDebounceHook/UseDebounceApp.jsx';
// import UseLocalStorageApp from './components/useLocalStorageHook/UseLocalStorageApp.jsx';
// //import UploadImage from './components/uploadImgs/UploadImage.jsx';
// import StatusComponent from './components/useOnlineStatus/StatusComponent.jsx';
// //import App from './components/useMediaQuery/UseMediaQuery.jsx';
// //import GeolocationDisplay from './components/useGeolocation/GeolocationDisplay.jsx';
// import LocationDetails from './components/useGeolocation/LocationDetails.jsx';
// //import HeroSection from './components/heroUI/HeroSection';
// //import { NextUIProvider } from "@nextui-org/react"
// //import SpringShowcase from './components/useSpring/SpringShowcase.jsx';
// import App from './App.jsx' 
// //import MarkdownApp from './components/markdown/MarkdownApp.jsx';
// //import FramerMotionApp from './components/framer-motion/FramerMotionApp.jsx';
// //import ImageUpload from './components/reactDnd/ImageUpload.jsx';
// //import SuspenseApp from './components/suspense/SuspenseApp.jsx';
// //import AntApp from './components/antDesing/AntApp.jsx';
// import Carousel from './components/useAutoPlay/Carousel.jsx';
// import CopyButton from './components/useCopy/CopyButton.jsx';
// import { MantineProvider } from '@mantine/core';
// //import StudentRegister from './components/mantine/StudentRegister.jsx';
// import AhooksApp from './components/ahooks/AhooksApp.jsx';
// import MyChart from './components/charts/MyChart.jsx';
// import LineGraph from './components/charts/LineGraph.jsx';
// import PieGraph from './components/charts/PieGraph.jsx';
// import ChartApp from './components/charts/ChartApp.jsx';
// import DraggableHome from './components/useGesture/DraggableHome.jsx';
// import MovableList from './components/react-movable/MovableList.jsx';
// import DndKitList from './components/dnd-kit/DndKitList.jsx';
// import HelmetHome from './components/helmet/Helmet.jsx';
// import UseDropzone from './components/useDropzone/UseDropzone.jsx';
// import FadeCard from './components/react-intersection-observer/FadeCard.jsx';
// import Dashboard from './components/SecureLocalStorageHook/Dashboard.jsx';
// import ReactAuthKitFlow from './components/reactAuthKitFlow/ReactAuthKitFlow.jsx';
// import Shop from './components/reactUseCart/Shop.jsx';
// import MediaHooksDemo from './components/mediaHooksDemo/MediaHooksDemo.jsx';
// import ReactWaypointDemo from './components/ReactWaypoint/ReactWaypointDemo.jsx';
// //import LazyImage from './components/react-intersection-observer/LazyImage.jsx';
// import SwiperApp from './components/swiper/SwiperApp.jsx';
// import UseHookApp from './components/usehooks-ts/UseHookApp.jsx';
// // import DocumentUpload from './components/fileUpload/DocumentUpload .jsx';
// // import DocumentList from './components/fileUpload/DocumentList.jsx';
// import QRCodeGenerator from './components/qRCodeGenerator/QRCodeGenerator.jsx';
// import QRCodeExample from './components/react-oauth-google/QRCodeExample.jsx';
// import SweetalertApp from './components/sweetalert2/sweetalert.jsx';
// import SkeletonApp from './components/loading-skeleton/SkeletonApp.jsx';
// import AosApp from './components/aos/AosApp.jsx';
// import SonnerApp from './components/sonner/SonnerApp.jsx';
// import ModalApp from './components/react-modal/ModalApp.jsx';
// import ConfettiApp from './components/react-confetti/ConfettiApp.jsx';
// import StrapiApp from './components/strapi/StrapiApp.jsx';
// import QuillEditor from './components/react-quill/QuillEditorApp.jsx';
// import PlayerApp from './components/react-player/PlayerApp.jsx';
// import DeviceInfo from './components/react-device-detect/DeviceInfo.jsx';
// import SpeechApp from './components/react-speech-recognition/speech.jsx';
// import HotkeysApp from './components/react-hotkeys-hook/HotkeysApp.jsx';
// import MapApp from './components/react-leaflet/MapApp.jsx';
// import TypeAnimationApp from './components/react-type-animation/TypeAnimationApp';
// import ParallaxApp from './components/react-parallax/ParallaxApp.jsx';
// import EmojiPickerApp from './components/emoji-picker-react/EmojiPickerApp';
// import ReactEasyCropApp from './components/react-easy-crop/ReactEasyCrop.jsx';
// import ShareApp from './components/react-share/ShareApp.jsx';
// import ReactratingApp from './components/react-rating/ReactratingApp.jsx';
// import ColorApp from './components/react-color/ColorApp.jsx';
// import ReactSlickApp from './components/react-slick/ReactSlickApp.jsx';
// import ReactJoyrideApp from './components/react-joyride/ReactJoyrideApp.jsx';
// import PdfViewerApp from './components/PDFViewer/PdfViewerApp.jsx';
// import ReactMultiCarouselApp from './components/react-multi-carousel/ReactMultiCarouselApp';



// const queryClient=new QueryClient()
// createRoot(document.getElementById('root')).render(


 
//   <CookiesProvider>
//     <Provider>
//       {/* <Provider store={Store}> */}
//       {/* <IndexManagingComponent/> */}
//       <QueryClientProvider client={queryClient}>

//         {/* <PRApp/> */}
//         {/* <JwtApp/>  */}
//         {/* <SwrApp/> */}
//          <BrowserRouter>
         
         
//           {/* <MarkdownApp/>
//           <FramerMotionApp/> */}
//           {/* <ImageUpload/> */}
//           {/* <SuspenseApp/> */}
//            <MantineProvider withNormalizeCSS withGlobalStyles>

//     </MantineProvider>
//     <ReactMultiCarouselApp/>
//     <ReactJoyrideApp/>
//     <ReactSlickApp/>
//     <ReactratingApp/>
//     <ColorApp/>
//     <ShareApp/>
//     <ReactEasyCropApp/>
//     <EmojiPickerApp/>
//     <ParallaxApp/>
//     <TypeAnimationApp/>
//     <MapApp/>
//     <HotkeysApp/>
//     <SpeechApp/>
//     <DeviceInfo/>
//     <PlayerApp/>
//     <QuillEditor/>
//     <StrapiApp/>
//     <ConfettiApp/>
//     <ModalApp/>
//     <SonnerApp/>
//     <AosApp/>
//     <SkeletonApp/>
//     <SweetalertApp/>

//     <QRCodeExample/>

// {/*        
//     <DocumentUpload/>
//     <DocumentList/> */}
//      {/* <DraggableHome/>  */}
//     <MovableList/> 
//     {/* <LazyImage/> */}
//     {/* <ReactWaypointDemo/>
//     <MediaHooksDemo/> */}
//     <SwiperApp/>
//     <UseHookApp/>
//     <ReactAuthKitFlow/>
//     <Shop/>
//     <Dashboard/>
//     <FadeCard/>
//     <UseDropzone/>
//     <HelmetHome/>
//     <DndKitList/>
//     <ChartApp/>
//     <AhooksApp/>

//           <CopyButton/>
//           <Carousel/>
//            <LocationDetails/>
//                <UseLocalStorageApp/> 
//        <App/> 
//         <PdfViewerApp/>
//     </BrowserRouter>
//         {/* <GeolocationDisplay/> */}
//         {/* <AnimatedLoginCard/>
//         <SpringShowcase/>
//         <LocationDetails/>
//           <NextUIProvider>
//           <HeroSection/>
//           </NextUIProvider> */}


//         { /* <FrontedApp/> */}
//         {/* <TodoApp/> */}
//       {/* <App/>
//       <UseDebounceApp/>
//       <UseLocalStorageApp/> */}
//         <ReactQueryDevtools/>
//       </QueryClientProvider>
//       {/* </Provider> */}
//     </Provider>  
//   </CookiesProvider>
  
// )
import { StrictMode, Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider, Link, useBlocker, Outlet } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// =========================================================================
// 1. ALL YOUR COMPONENT IMPORTS (Grouped safely at the top)
// =========================================================================
import JotaiApp from './components/jotai/JotaiApp.jsx';
import TodoList from './components/reactQuery/TodoList.jsx';
import JwtApp from './components/jwt/JwtApp.jsx';
import SwrApp from './components/swr/SwrApp.jsx';
import FrontedApp from './components/webSocket/Fronted.jsx';
import UseDebounceApp from './components/useDebounceHook/UseDebounceApp.jsx';
import UseLocalStorageApp from './components/useLocalStorageHook/UseLocalStorageApp.jsx';
import StatusComponent from './components/useOnlineStatus/StatusComponent.jsx';
import LocationDetails from './components/useGeolocation/LocationDetails.jsx';
import App from './App.jsx'; 
import Carousel from './components/useAutoPlay/Carousel.jsx';
import CopyButton from './components/useCopy/CopyButton.jsx';
import { MantineProvider } from '@mantine/core';
import AhooksApp from './components/ahooks/AhooksApp.jsx';
import ChartApp from './components/charts/ChartApp.jsx';
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
import SwiperApp from './components/swiper/SwiperApp.jsx';
import UseHookApp from './components/usehooks-ts/UseHookApp.jsx';
import QRCodeExample from './components/react-oauth-google/QRCodeExample.jsx';
import SweetalertApp from './components/sweetalert2/sweetalert.jsx';
import SkeletonApp from './components/loading-skeleton/SkeletonApp.jsx';
import AosApp from './components/aos/AosApp.jsx';
import SonnerApp from './components/sonner/SonnerApp.jsx';
import ModalApp from './components/react-modal/ModalApp.jsx';
import ConfettiApp from './components/react-confetti/ConfettiApp.jsx';
import StrapiApp from './components/strapi/StrapiApp.jsx';
import QuillEditor from './components/react-quill/QuillEditorApp.jsx';
import PlayerApp from './components/react-player/PlayerApp.jsx';
import DeviceInfo from './components/react-device-detect/DeviceInfo.jsx';
import SpeechApp from './components/react-speech-recognition/speech.jsx';
import HotkeysApp from './components/react-hotkeys-hook/HotkeysApp.jsx';
import MapApp from './components/react-leaflet/MapApp.jsx';
import TypeAnimationApp from './components/react-type-animation/TypeAnimationApp';
import ParallaxApp from './components/react-parallax/ParallaxApp.jsx';
import EmojiPickerApp from './components/emoji-picker-react/EmojiPickerApp';
import ReactEasyCropApp from './components/react-easy-crop/ReactEasyCrop.jsx';
import ShareApp from './components/react-share/ShareApp.jsx';
import ReactratingApp from './components/react-rating/ReactratingApp.jsx';
import ColorApp from './components/react-color/ColorApp.jsx';
import ReactSlickApp from './components/react-slick/ReactSlickApp.jsx';
import ReactJoyrideApp from './components/react-joyride/ReactJoyrideApp.jsx';
import PdfViewerApp from './components/PDFViewer/PdfViewerApp.jsx';
import ReactMultiCarouselApp from './components/react-multi-carousel/ReactMultiCarouselApp';

// =========================================================================
// 2. ROUTE PAGES
// =========================================================================

function FormPage() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  // Automatically blocks if name input is not empty and hasn't been saved
  const blocker = useBlocker(({ beforeEachContext }) => {
    return !saved && name.trim() !== "";
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h1 className="text-4xl font-bold text-center mb-8">useBlocker Demo</h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-6 text-dark">
        <h2 className="text-2xl font-bold mb-3">What is useBlocker?</h2>
        <p>useBlocker prevents users from accidentally leaving a page when they have unsaved changes.</p>
      </div>

      <div className="bg-light p-6 rounded-lg text-dark">
        <label className="block font-semibold mb-2">Student Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSaved(false);
          }}
          className="form-control mb-3"
        />
        <button onClick={() => setSaved(true)} className="btn btn-primary">
          Save
        </button>
      </div>

      <div className="mt-4">
        <Link to="/home" className="btn btn-success">
          Go To Home Page
        </Link>
      </div>

      {blocker.state === "blocked" && (
        <div className="mt-4 alert alert-danger p-4">
          <h4 className="alert-heading font-bold mb-2">Unsaved Changes!</h4>
          <p>You have unsaved changes. Do you really want to leave?</p>
          <div className="d-flex gap-2 mt-3">
            <button onClick={() => blocker.proceed()} className="btn btn-danger">Leave</button>
            <button onClick={() => blocker.reset()} className="btn btn-secondary">Stay</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="p-5 text-center bg-light rounded-3 mt-4">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <Link to="/" className="btn btn-primary">Back to Form Sandbox</Link>
    </div>
  );
}

// =========================================================================
// 3. MASTER APPLICATION LAYOUT
// =========================================================================
// This houses all providers and active route pages alongside your list of tools.
function MasterLayout() {
  return (
    <div className="container py-5">
      {/* Dynamic routing contents (FormPage or Home renders here) */}
      <Outlet />

      <hr className="my-5" />
      <h2 className="text-center text-secondary mb-4">— Playground Ecosystem Component Sandbox —</h2>
      
      {/* All your ecosystem components are stacked neatly below inside the routing context.
         Un-comment or comment out whatever you are testing! 
      */}
      <ReactMultiCarouselApp />
      <ReactJoyrideApp />
      <ReactSlickApp />
      <ReactratingApp />
      <ColorApp />
      <ShareApp />
      <ReactEasyCropApp />
      <EmojiPickerApp />
      <ParallaxApp />
      <TypeAnimationApp />
      <MapApp />
      <HotkeysApp />
      <SpeechApp />
      <DeviceInfo />
      <PlayerApp />
      <QuillEditor />
      <StrapiApp />
      <ConfettiApp />
      <ModalApp />
      <SonnerApp />
      <AosApp />
      <SkeletonApp />
      <SweetalertApp />
      <QRCodeExample />
      <MovableList /> 
      <SwiperApp />
      <UseHookApp />
      <ReactAuthKitFlow />
      <Shop />
      <Dashboard />
      <FadeCard />
      <UseDropzone />
      <HelmetHome />
      <DndKitList />
      <ChartApp />
      <AhooksApp />
      <CopyButton />
      <Carousel />
      <LocationDetails />
      <UseLocalStorageApp /> 
      <App /> 
      <PdfViewerApp />
    </div>
  );
}

// =========================================================================
// 4. ROUTER DEFINITIONS & CORE RENDERING
// =========================================================================
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <FormPage />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            
            {/* Single source of truth for handling application views */}
            <RouterProvider router={router} />
            
          </MantineProvider>
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </Provider>
    </CookiesProvider>
  </StrictMode>
);