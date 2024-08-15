import React, { useEffect, useState } from 'react'
import MyDropzone from './DropZone'
import ImageSlider from './ImageSlider'

export default function App() {
    const [images, setImages] = useState([])
    console.log(images)

    return (
        <>
            <MyDropzone setImages={setImages} />
            {images.map((image, index) => <ImageSlider key={index} image={image} />)}
        </>
    )
}
