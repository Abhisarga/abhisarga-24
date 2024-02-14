import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '../components/router'
import '../styles/tailwind.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)