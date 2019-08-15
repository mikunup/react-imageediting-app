import React, { useEffect } from 'react';
import './Image.css';

/**
 * convertarrayBufferToBase64 convert buffer to base64.
 * @param {Uint8Array} buffer
 */
const convertarrayBufferToBase64 = (buffer: Uint8Array) => {
    let binary: string = '';
    const len: number = buffer.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
    }
    return window.btoa(binary);
}

// observeDragAndDropImage observe ImageInput Element And Render the image.
// TODO: Must divide observe imageInput and render image.
const observeDragAndDropImage = () => {
    const imageEle: HTMLElement = (document.getElementById('dropZone') as HTMLElement)
    const imageInput: HTMLInputElement = (document.getElementById('dropImage') as HTMLInputElement)

    imageInput.addEventListener('change', () => {
        // TODO
    })

    imageEle.addEventListener('drop', (e) => {
        e.preventDefault();
        // TODO any types
        const files: any = e.type === 'change' ? (e.target as any).files : (e.dataTransfer as any).files;
        const reader = new FileReader()
        reader.readAsArrayBuffer(files[0]);

        reader.onload = () => {
            const buffer = new Uint8Array((reader.result as ArrayBuffer));
            const base64 = convertarrayBufferToBase64(buffer);

            const imageEle: HTMLImageElement = (document.getElementById('showImage') as HTMLImageElement)
            imageEle.src = 'data:image/png;base64,' + base64;
        }
    });
}

// ImageDropZone is Render Element that draganddrop image-file.
export const ImageDropZone: React.FC = () => {
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
export const ShowImage: React.FC = () => {
    return (
        <img src='' id="showImage" />
    )
}
