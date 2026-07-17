import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecipiProvider from './context/Recipe.jsx'

createRoot(document.getElementById('root')).render(
  <RecipiProvider>
    <App />
  </RecipiProvider>,
)
