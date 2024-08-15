import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function MyDropzone({ setImages }) {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            if (/^image\/.+$/.test(file.type)) {
                const reader = new FileReader();

                reader.onabort = () => console.log('file reading was aborted');
                reader.onerror = () => console.log('file reading has failed');
                reader.onload = () => {
                    const binaryStr = reader.result;
                    setImages(images => [...images, binaryStr]);
                };

                reader.readAsDataURL(file);  // This should be placed after setting up the reader.onload
            }
        });
    }, [setImages]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ width: '100vw', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    );
}
