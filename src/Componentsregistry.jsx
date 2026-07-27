// =========================================================================
// COMPONENT REGISTRY
// Single source of truth for every sandboxed demo route.
// Each entry: { id, name, element, category? }
// `id` is used in the URL: /component/:id
// =========================================================================

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
import UseLocalStorageApp from './components/useLocalStorageHook/UseLocalStorageApp.jsx';
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
import TypeAnimationApp from './components/react-type-animation/TypeAnimationApp.jsx';
import ParallaxApp from './components/react-parallax/ParallaxApp.jsx';
import EmojiPickerApp from './components/emoji-picker-react/EmojiPickerApp.jsx';
import ReactEasyCropApp from './components/react-easy-crop/ReactEasyCrop.jsx';
import ShareApp from './components/react-share/ShareApp.jsx';
import ReactratingApp from './components/react-rating/ReactratingApp.jsx';
import ColorApp from './components/react-color/ColorApp.jsx';
import ReactSlickApp from './components/react-slick/ReactSlickApp.jsx';
import ReactJoyrideApp from './components/react-joyride/ReactJoyrideApp.jsx';
import PdfViewerApp from './components/PDFViewer/PdfViewerApp.jsx';
import ReactMultiCarouselApp from './components/react-multi-carousel/ReactMultiCarouselApp.jsx';
import DOMPresentation from './components/presentation/DOM.jsx';
import BatteryStatusWidget from './components/useBattery/UseBattery.jsx';

// NOTE: FormPage and Home are route-level page components, not "library demo"
// components, so they're defined in Index.jsx and imported here as elements
// via a factory to avoid a circular import. See buildRegistry() below.

export function buildRegistry({ FormPage, Home }) {
  return [
    // --- Core routing hooks ---
    { id: 'use-blocker-demo', name: 'useBlocker Core Demo', element: <FormPage />, category: 'Core Routing Hooks' },
    { id: 'home-view', name: 'Home Route View Layout', element: <Home />, category: 'Core Routing Hooks' },

    // --- UI / carousels / sliders ---
    { id: 'multi-carousel', name: 'React Multi Carousel', element: <ReactMultiCarouselApp />, category: 'Carousels & Sliders' },
    { id: 'slick', name: 'React Slick Slider', element: <ReactSlickApp />, category: 'Carousels & Sliders' },
    { id: 'swiper', name: 'Swiper Premium Carousels', element: <SwiperApp />, category: 'Carousels & Sliders' },
    { id: 'carousel', name: 'Autoplay Slide Base Box', element: <Carousel />, category: 'Carousels & Sliders' },

    // --- Onboarding / feedback ---
    { id: 'joyride', name: 'React Joyride System', element: <ReactJoyrideApp />, category: 'Onboarding & Feedback' },
    { id: 'confetti', name: 'Canvas Particle Confetti', element: <ConfettiApp />, category: 'Onboarding & Feedback' },
    { id: 'sonner', name: 'Sonner Notification Toast', element: <SonnerApp />, category: 'Onboarding & Feedback' },
    { id: 'sweetalert', name: 'SweetAlert 2 Notifications', element: <SweetalertApp />, category: 'Onboarding & Feedback' },
    { id: 'modal', name: 'Accessible Window Modals', element: <ModalApp />, category: 'Onboarding & Feedback' },
    { id: 'skeleton', name: 'Bones Skeleton Loading UI', element: <SkeletonApp />, category: 'Onboarding & Feedback' },

    // --- Media / input widgets ---
    { id: 'rating', name: 'React Stars Rating', element: <ReactratingApp />, category: 'Media & Input' },
    { id: 'color-picker', name: 'Hue Color Picker Module', element: <ColorApp />, category: 'Media & Input' },
    { id: 'easy-crop', name: 'React Easy Image Crop', element: <ReactEasyCropApp />, category: 'Media & Input' },
    { id: 'emoji-picker', name: 'Emoji Picker Selector', element: <EmojiPickerApp />, category: 'Media & Input' },
    { id: 'dropzone', name: 'React File Dropzone Area', element: <UseDropzone />, category: 'Media & Input' },
    { id: 'quill-editor', name: 'Rich Quill Document Editor', element: <QuillEditor />, category: 'Media & Input' },
    { id: 'player', name: 'React Player Engine', element: <PlayerApp />, category: 'Media & Input' },
    { id: 'pdf-viewer', name: 'PDF Core Document Viewer', element: <PdfViewerApp />, category: 'Media & Input' },
    { id: 'copy-btn', name: 'Clipboard String Copy Button', element: <CopyButton />, category: 'Media & Input' },

    // --- Visual effects ---
    { id: 'parallax', name: 'Parallax Background Layer', element: <ParallaxApp />, category: 'Visual Effects' },
    { id: 'type-animation', name: 'Typewriter Animation Text', element: <TypeAnimationApp />, category: 'Visual Effects' },
    { id: 'aos', name: 'Animate On Scroll Toolkit', element: <AosApp />, category: 'Visual Effects' },
    { id: 'fade-card', name: 'Intersection Observer Fade', element: <FadeCard />, category: 'Visual Effects' },

    // --- Maps / device / hardware ---
    { id: 'leaflet-map', name: 'Leaflet Interactive Maps', element: <MapApp />, category: 'Maps & Device' },
    { id: 'geolocation', name: 'Core GPS Geolocation Details', element: <LocationDetails />, category: 'Maps & Device' },
    { id: 'device-info', name: 'Device Hardware Detect', element: <DeviceInfo />, category: 'Maps & Device' },
    { id: 'speech', name: 'Voice Speech Recognition', element: <SpeechApp />, category: 'Maps & Device' },
    { id: 'hotkeys', name: 'Global Hotkeys Listener', element: <HotkeysApp />, category: 'Maps & Device' },

    // --- Data / state / auth ---
    { id: 'auth-kit', name: 'React Auth Kit Context', element: <ReactAuthKitFlow />, category: 'Data & Auth' },
    { id: 'shopping-cart', name: 'React Use Cart Engine', element: <Shop />, category: 'Data & Auth' },
    { id: 'dashboard', name: 'Secure Vault Storage Panel', element: <Dashboard />, category: 'Data & Auth' },
    { id: 'localstorage', name: 'Dynamic Local Storage Sync', element: <UseLocalStorageApp />, category: 'Data & Auth' },
    { id: 'strapi', name: 'Strapi CMS Fetch API', element: <StrapiApp />, category: 'Data & Auth' },
    { id: 'charts', name: 'ChartJS Complex Analytics', element: <ChartApp />, category: 'Data & Auth' },
    { id: 'qrcode', name: 'OAuth & QR Code Scanner', element: <QRCodeExample />, category: 'Data & Auth' },

    // --- Lists & drag/drop ---
    { id: 'movable-list', name: 'Movable Component Lists', element: <MovableList />, category: 'Lists & Drag/Drop' },
    { id: 'dnd-kit', name: 'Dnd-Kit Advanced Reorder', element: <DndKitList />, category: 'Lists & Drag/Drop' },

    // --- Misc / utility hooks ---
    { id: 'usehooks-ts', name: 'Custom UseHooks-TS Store', element: <UseHookApp />, category: 'Utility Hooks' },
    { id: 'ahooks', name: 'Alibaba Production Ahooks', element: <AhooksApp />, category: 'Utility Hooks' },
    { id: 'helmet', name: 'SEO Document Head Control', element: <HelmetHome />, category: 'Utility Hooks' },
    { id: 'share', name: 'Social Share Portal', element: <ShareApp />, category: 'Utility Hooks' },
    { id: 'DOM', name: 'Document Object Model', element: <DOMPresentation />, category: 'Utility Hooks' },
    { id: 'useBattery', name: 'useBattery Hook', element: <BatteryStatusWidget/>, category: 'Utility Hooks' },



    // --- App root ---
    { id: 'main-app', name: 'Main Core App Context', element: <App />, category: 'App Root' },
  ];
}