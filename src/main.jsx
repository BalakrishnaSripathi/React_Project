import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserLogin from './components/UserLogin.jsx';
import { CookiesProvider } from 'react-cookie';
import TailwindDemo from './components/tailwindCss/TailwindDemo.jsx';
import AllMUIConcepts from './components/materialUi/MaterialUiComponent.jsx';
import Store from './components/reduxStore/Store.js';
import { Provider } from 'react-redux';
import ReduxApp from './components/reduxStore/ReduxApp.jsx';
import UseMemoComponent from './components/useMemo/UseMemoComponent.jsx';
import UseCallbackComponent from './components/useCallback.jsx/UseCallbackComponent.jsx';
import AuthDashboard from './components/hoc/Dashboard.jsx';
import Home from './components/contextAPI/Home.jsx';
import OtpComponent from './components/otp/OtpComponent.jsx';
import UseLayout from './components/useLayoutEffect/UseLayout.jsx';
import UseDebugValue from './components/useDebugValue/UseDebugValue.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <CookiesProvider>
  
    <Provider store={Store}>
      <App/>
    </Provider>
  </CookiesProvider>
  
  </BrowserRouter>,
)
