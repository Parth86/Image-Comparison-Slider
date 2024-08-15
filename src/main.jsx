import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageSlider from './ImageSlider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ImageSlider image1={"goku.webp"} image2={'goku-blur.jpg'} /> */}
    <App />
  </StrictMode>,
)
