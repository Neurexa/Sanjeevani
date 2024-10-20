"use client";
import Aside from "@/components/Aside";
import Chatbot from "@/components/Chatbot";
import styles from "./page.module.css";
import { useGlobal } from "@/context/GlobalContext";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


function dataURItoFile(dataURI, fileName) {
  // Split the data URI into two parts
  const byteString = atob(dataURI.split(',')[1]);  // Decode base64 data
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];  // Extract MIME type

  // Create an array of bytes from the decoded string
  const arrayBuffer = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arrayBuffer[i] = byteString.charCodeAt(i);
  }

  // Create a Blob from the array buffer and MIME type
  const blob = new Blob([arrayBuffer], { type: mimeString });

  // Return the Blob as a File object with a filename
  return new File([blob], fileName, { type: mimeString });
}


export default function Home() {
  // Global Context
  const { cameraModal, setCameraModal, imageUpload } = useGlobal();
  const handleTakePhoto = (dataUri) => {
    const file = dataURItoFile(dataUri, 'image.png');
    imageUpload(file, dataUri);
    setCameraModal(false);
  }

  return (
    <main className={styles.main}>
      {cameraModal && 
      <Camera
        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
      />}
      <Aside />
      <Chatbot />
    </main>
  );
}
