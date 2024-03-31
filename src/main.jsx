// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Providers } from './providers/Providers'
import { ThemeSwitcher } from './components/Switch'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
    <ThemeSwitcher />
  </Providers>
)
