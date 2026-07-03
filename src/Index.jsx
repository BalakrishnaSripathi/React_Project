import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Link, useBlocker, Outlet, useParams, useNavigate } from 'react-router-dom';

// =========================================================================
// ALL COMPONENT IMPORTS
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
// ROUTE SUB-COMPONENTS (Form & Home)
// =========================================================================
function FormPage() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const blocker = useBlocker(({ beforeEachContext }) => !saved && name.trim() !== "");
  const navigate = useNavigate();

  return (
    <div className="bg-white text-dark p-2">
      <h5 className="fw-bold mb-3">Form Verification Flow</h5>
      <input
        type="text"
        placeholder="Type something to test route blocks..."
        value={name}
        onChange={(e) => { setName(e.target.value); setSaved(false); }}
        className="form-control mb-3"
      />
      <div className="d-flex gap-2">
        <button onClick={() => setSaved(true)} className="btn btn-primary btn-sm">Save Form State</button>
        <button onClick={() => navigate('/home')} className="btn btn-outline-secondary btn-sm">Direct to Home</button>
      </div>

      {blocker.state === "blocked" && (
        <div className="mt-3 alert alert-danger p-2 small">
          <p className="mb-2 fw-bold">Unsaved progress detected! Exit?</p>
          <button onClick={() => blocker.proceed()} className="btn btn-danger btn-sm me-2 py-0 px-2">Leave</button>
          <button onClick={() => blocker.reset()} className="btn btn-secondary btn-sm py-0 px-2">Stay</button>
        </div>
      )}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center text-dark py-4">
      <h5 className="fw-bold mb-3">Welcome to Home View Route</h5>
      <p className="text-muted small mb-3">This confirms isolated routing works natively.</p>
      <button onClick={() => navigate('/')} className="btn btn-primary btn-sm">Return to Sandbox Hub</button>
    </div>
  );
}

// =========================================================================
// UNIFIED ECOSYSTEM REGISTRY (4-Column Array Grid)
// =========================================================================
const componentsRegistry = [
  { id: 'use-blocker-demo', name: 'useBlocker Core Demo', element: <FormPage />, category: 'Core Routing Hooks' },
  { id: 'home-view', name: 'Home Route View Layout', element: <Home />, category: 'Core Routing Hooks' },
  { id: 'multi-carousel', name: 'React Multi Carousel', element: <ReactMultiCarouselApp /> },
  { id: 'joyride', name: 'React Joyride System', element: <ReactJoyrideApp /> },
  { id: 'slick', name: 'React Slick Slider', element: <ReactSlickApp /> },
  { id: 'rating', name: 'React Stars Rating', element: <ReactratingApp /> },
  { id: 'color-picker', name: 'Hue Color Picker Module', element: <ColorApp /> },
  { id: 'share', name: 'Social Share Portal', element: <ShareApp /> },
  { id: 'easy-crop', name: 'React Easy Image Crop', element: <ReactEasyCropApp /> },
  { id: 'emoji-picker', name: 'Emoji Picker Selector', element: <EmojiPickerApp /> },
  { id: 'parallax', name: 'Parallax Background Layer', element: <ParallaxApp /> },
  { id: 'type-animation', name: 'Typewriter Animation text', element: <TypeAnimationApp /> },
  { id: 'leaflet-map', name: 'Leaflet Interactive Maps', element: <MapApp /> },
  { id: 'hotkeys', name: 'Global Hotkeys Listener', element: <HotkeysApp /> },
  { id: 'speech', name: 'Voice Speech Recognition', element: <SpeechApp /> },
  { id: 'device-info', name: 'Device Hardware Detect', element: <DeviceInfo /> },
  { id: 'player', name: 'React Player Engine', element: <PlayerApp /> },
  { id: 'quill-editor', name: 'Rich Quill Document Editor', element: <QuillEditor /> },
  { id: 'strapi', name: 'Strapi CMS Fetch API', element: <StrapiApp /> },
  { id: 'confetti', name: 'Canvas Particle Confetti', element: <ConfettiApp /> },
  { id: 'modal', name: 'Accessible Window Modals', element: <ModalApp /> },
  { id: 'sonner', name: 'Sonner Notification Toast', element: <SonnerApp /> },
  { id: 'aos', name: 'Animate On Scroll Toolkit', element: <AosApp /> },
  { id: 'skeleton', name: 'Bones Skeleton Loading UI', element: <SkeletonApp /> },
  { id: 'sweetalert', name: 'SweetAlert 2 Notifications', element: <SweetalertApp /> },
  { id: 'qrcode', name: 'OAuth & QR Code Scanner', element: <QRCodeExample /> },
  { id: 'movable-list', name: 'Movable Component Lists', element: <MovableList /> },
  { id: 'swiper', name: 'Swiper Premium Carousels', element: <SwiperApp /> },
  { id: 'usehooks-ts', name: 'Custom UseHooks-TS Store', element: <UseHookApp /> },
  { id: 'auth-kit', name: 'React Auth Kit Context', element: <ReactAuthKitFlow /> },
  { id: 'shopping-cart', name: 'React Use Cart Engine', element: <Shop /> },
  { id: 'dashboard', name: 'Secure Vault Storage Panel', element: <Dashboard /> },
  { id: 'fade-card', name: 'Intersection Observer Fade', element: <FadeCard /> },
  { id: 'dropzone', name: 'React File Dropzone Area', element: <UseDropzone /> },
  { id: 'helmet', name: 'SEO Document Head Control', element: <HelmetHome /> },
  { id: 'dnd-kit', name: 'Dnd-Kit Advanced Reorder', element: <DndKitList /> },
  { id: 'charts', name: 'ChartJS Complex Analytics', element: <ChartApp /> },
  { id: 'ahooks', name: 'Alibaba Production Ahooks', element: <AhooksApp /> },
  { id: 'copy-btn', name: 'Clipboard String Copy Button', element: <CopyButton /> },
  { id: 'carousel', name: 'Autoplay Slide Base Box', element: <Carousel /> },
  { id: 'geolocation', name: 'Core GPS Geolocation Details', element: <LocationDetails /> },
  { id: 'localstorage', name: 'Dynamic Local Storage Sync', element: <UseLocalStorageApp /> },
  { id: 'main-app', name: 'Main Core Core App Context', element: <App /> },
  { id: 'pdf-viewer', name: 'PDF Core Document Viewer', element: <PdfViewerApp /> },
];

// =========================================================================
// APPLICATION GRID LAYOUT 
// =========================================================================
function DashboardGrid() {
  return (
    <div className="row g-4">
      {componentsRegistry.map((comp) => (
        <div key={comp.id} className="col-xl-3 col-lg-3 col-md-6 col-12">
          <Link to={`/component/${comp.id}`} className="text-decoration-none">
            <div 
              className="card h-100 border-0 shadow-sm rounded-3 bg-white text-dark" 
              style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,0.075)';
              }}
            >
              <div className="card-body p-3 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-secondary mb-2 text-uppercase font-monospace" style={{ fontSize: '10px' }}>
                    {comp.category || 'Module Component'}
                  </span>
                  <h6 className="card-title fw-bold m-0 text-dark" style={{ lineHeight: '1.4' }}>{comp.name}</h6>
                </div>
                <div className="border-top pt-2 mt-3 text-primary d-flex justify-content-between align-items-center" style={{ fontSize: '13px' }}>
                  <span>Open Screen Isolation</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

// =========================================================================
// FULL ISOLATED MODULE RENDERER
// =========================================================================
function ComponentIsolator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activeModule = componentsRegistry.find(c => c.id === id);

  if (!activeModule) {
    return (
      <div className="text-center p-5 bg-white rounded shadow text-dark">
        <h3>Sandbox Component Target Missing</h3>
        <button onClick={() => navigate('/')} className="btn btn-dark mt-3">Back to Main Hub Grid</button>
      </div>
    );
  }

  return (
    <div className="card shadow border-0 rounded-4">
      <div className="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center rounded-top-4">
        <h5 className="m-0 fw-bold">{activeModule.name} Running Isolated</h5>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/')}>
          Close & Return to Grid Overview ×
        </button>
      </div>
      <div className="card-body p-4 bg-white min-vh-75">
        {activeModule.element}
      </div>
    </div>
  );
}

// =========================================================================
// MAIN ENTRY WRAPPER FRAME
// =========================================================================
function MasterLayout() {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="container px-md-4">
        <Outlet />
      </div>
    </div>
  );
}

// =========================================================================
// ROUTER ASSIGNMENT TREE
// =========================================================================
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <div className="text-center mb-5 text-dark">
              <h2 className="fw-bold m-0">Ecosystem Grid Sandbox Dashboard</h2>
              <p className="text-muted mt-1">Unified blocks scaling up to exact 4 column configurations on large monitors.</p>
            </div>
            <DashboardGrid />
          </>
        )
      },
      {
        path: "home",
        element: (
          <div className="card shadow border-0 p-4 bg-white mx-auto" style={{ maxWidth: '600px' }}>
            <Home />
          </div>
        )
      },
      {
        path: "component/:id",
        element: <ComponentIsolator />
      }
    ]
  }
]);

export default function IndexApp() {
  return <RouterProvider router={router} />;
}