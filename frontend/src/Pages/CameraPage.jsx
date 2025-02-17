/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import ImageList from '../Components/ImageList';
import ControlButtons from '../Components/ControlButtons';
import CameraView from '../Components/CameraView';

import {
  handleSendImages,
  handleToggleMirror,
  handleToggleFacingMode,
  handleCapture,
  handleSelectImage,
} from '../Handlers/commonHandler';

const CameraPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [cameraOptions, setCameraOptions] = useState({
    facingMode: 'environment',
    mirror: true,
  });

  useEffect(() => {
    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: cameraOptions.facingMode,
            width: { ideal: 640, max: 1280 },
            height: { ideal: 480, max: 720 },
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert(
          'Failed to access camera. Please ensure permissions are granted.'
        );
      }
    };

    openCamera();
  }, [cameraOptions.facingMode]);

  return (
    <div className="container">
      <h1 className="heading">Camera</h1>
      <CameraView videoRef={videoRef} mirror={cameraOptions.mirror} />
      <ControlButtons
        onToggleMirror={handleToggleMirror}
        onToggleFacingMode={handleToggleFacingMode}
        onCapture={handleCapture}
        onSendImages={handleSendImages}
        setCameraOptions={setCameraOptions}
        canvasRef={canvasRef}
        videoRef={videoRef}
        setCapturedImages={setCapturedImages}
        selectedImages={selectedImages}
        capturedImages={capturedImages}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <ImageList
        images={capturedImages}
        selectedImages={selectedImages}
        onSelectImage={handleSelectImage}
        mirror={cameraOptions.mirror}
        setSelectedImages={setSelectedImages}
      />
    </div>
  );
};

export default CameraPage;

