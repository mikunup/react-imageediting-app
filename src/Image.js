import React, { useEffect } from 'react';
import './Image.css';

/**
 * convertarrayBufferToBase64 convert buffer to base64.
 * @param {Uint8Array} buffer
 */
const convertarrayBufferToBase64 = (buffer) => {
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
    }
    return window.btoa(binary);
}

// observeDragAndDropImage observe ImageInput Element And Render the image.
// TODO: Must divide observe imageInput and render image.
const observeDragAndDropImage = () => {
    const imageEle = document.getElementById('dropZone')
    const imageInput = document.getElementById('dropImage')

    imageInput.addEventListener('change', () => {
        // TODO
    })

    imageEle.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.type === 'change' ? e.target.files : e.dataTransfer.files;
        const reader = new FileReader()
        reader.readAsArrayBuffer(files[0]);

        reader.onload = () => {
            const buffer = new Uint8Array(reader.result);
            const base64 = convertarrayBufferToBase64(buffer);

            const imageEle = document.getElementById('showImage')
            imageEle.src = 'data:image/png;base64,' + base64;
        }
    });
}

// ImageDropZone is Render Element that draganddrop image-file.
export const ImageDropZone = () => {
    useEffect(() => {
        observeDragAndDropImage();
    });
    return (
        <div id="dropZone">
            <input id="dropImage" type='file'></input>
        </div>
    )
}

// ShowImage is Render Element that show the image.
export const ShowImage = () => {
    return (
        <img src='' id="showImage" />
    )
}
