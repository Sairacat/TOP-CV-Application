import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/css-reset.css'
import './styles/index.css'
import './styles/animation.css'
import { App } from './components/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
