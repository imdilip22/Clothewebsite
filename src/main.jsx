import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopcontextProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ShopcontextProvider>
       <App />
    </ShopcontextProvider>
    
)
