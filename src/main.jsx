import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Index from './components/Index.jsx';
import UserLogin from './components/UserLogin.jsx';
import { CookiesProvider } from 'react-cookie';
import TailwindDemo from './components/tailwindCss/TailwindDemo.jsx';
import IshopIndex from './components/iShop/IShopIndex.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <CookiesProvider>
    <IshopIndex/>
  </CookiesProvider>
  </BrowserRouter>,
)
