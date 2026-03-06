import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'jotai';
import JotaiApp from './components/jotai/JotaiApp.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TodoList from './components/reactQuery/TodoList.jsx';

const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(



  <BrowserRouter>
  <CookiesProvider>
    <Provider>
      {/* <Provider store={Store}> */}
      {/* <IndexManagingComponent/> */}
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
      {/* </Provider> */}
    </Provider>  
  </CookiesProvider>
  </BrowserRouter>,
)
