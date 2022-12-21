import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import App from './App'
import { ContextProvider } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
)
