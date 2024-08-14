import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App image1={"goku.webp"} image2={'goku-blur.jpg'} />
  </StrictMode>,
)
