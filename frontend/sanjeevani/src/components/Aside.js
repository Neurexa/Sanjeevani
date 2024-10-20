"use client";
import { useGlobal } from "@/context/GlobalContext";
import Image from "next/image";
import { useRef } from "react";
import 'react-html5-camera-photo/build/css/index.css';
import marketinsight_icon from "../assets/marketinsight_icon.png";
import upload_icon from "../assets/upload_icon.png";
import styles from "./aside.module.css";


export default function Aside() {
  // Global Context
  const { imageUpload, file, setCameraModal } = useGlobal();

  const imageUploadRef = useRef(null);
  const handleUploadClick = () => {
    imageUploadRef.current.click();
  };

  const handleCamera = () => {
    setCameraModal(true);
  }
  
  return (
    <div className={styles.aside}>
      <div className={styles.aside_upper}>
        <button className={styles.upload_btn} onClick={handleUploadClick}>
          <input type="file" name="upload" ref={imageUploadRef} style={{ display: "none" }} onChange={(e)=>{
            imageUpload(e.target.files[0])
          }} />
          <span>Upload</span>
          <Image src={upload_icon} alt="Upload" />
        </button>
        <button className={styles.upload_btn} onClick={handleCamera}>
          <span>Capture</span>
        </button>
        <p>Upload the photo of the plant which you wish to identify</p>
      </div>
      <div className={styles.aside_lower}>
        <button className={styles.marketinsight_btn}>
          <span>Check Market Insights</span>
          <Image src={marketinsight_icon} alt="Market Insights" />
        </button>
      </div>
    </div>
  );
}
