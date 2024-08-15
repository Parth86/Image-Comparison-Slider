import { useEffect, useRef, useState } from 'react'
import './App.css'

const ImageSlider = ({ image, width = '500px', height = '500px' }) => {
  const [sliderPos, setSliderPos] = useState(50)
  const [isSliderDragging, setIsSliderDragging] = useState(false)

  const containerRef = useRef(null)


  const handleSliderDrag = (e) => {
    if (!isSliderDragging) return

    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const xPos = e.clientX - containerRect.left
    const xPosPercentage = (xPos / containerRect.width) * 100

    if (xPosPercentage >= 0 && xPosPercentage <= 100) {
      setSliderPos(xPosPercentage)
    }
  }

  const handleMouseUp = () => setIsSliderDragging(false)
  const handleMouseDown = () => setIsSliderDragging(true)


  useEffect(() => {
    if (isSliderDragging) {
      window.addEventListener('mousemove', handleSliderDrag)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleSliderDrag)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleSliderDrag)
      window.removeEventListener('mouseup', handleMouseUp)
    }

  }, [isSliderDragging])

  return (
    <div className='container' ref={containerRef}>
      <div>
        <img src={image} width={width} height={height} />
      </div>
      <div className='overlay' style={{ width: `${sliderPos}%` }}>
        <img src={image} width={width} height={height} />
      </div>
      <span className='slider' style={{ left: `${sliderPos}%` }} onMouseDown={handleMouseDown}
      ></span>
    </div>
  )
}

export default ImageSlider