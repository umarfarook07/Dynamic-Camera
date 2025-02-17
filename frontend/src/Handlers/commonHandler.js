export const handleSendImages = async (selectedImages, capturedImages) => {
  if (selectedImages.length === 0) {
    alert('Please select at least one image.');
    return;
  }

  const selectedImagesData = capturedImages
    .filter((_, index) => selectedImages.includes(index))
    .map((image, index) => ({ image, index }));

  try {
    const response = await fetch('/api/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedImagesData),
    });

    if (response.ok) {
      alert('Images sent successfully!');
    } else {
      alert('Failed to send images.');
    }
  } catch (error) {
    console.error('Error sending images:', error);
    alert('An error occurred while sending images.');
  }
};

export const handleToggleMirror = (setCameraOptions) => {
  setCameraOptions((prevOptions) => ({
    ...prevOptions,
    mirror: !prevOptions.mirror,
  }));
};

export const handleToggleFacingMode = (setCameraOptions) => {
  setCameraOptions((prevOptions) => ({
    ...prevOptions,
    facingMode:
      prevOptions.facingMode === 'environment' ? 'user' : 'environment',
  }));
};

  export const handleCapture = (canvasRef, videoRef,setCapturedImages) => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    setCapturedImages((prevImages) => [...prevImages, imageDataURL]);
};
  
export const handleSelectImage = (index, setSelectedImages) => {
  setSelectedImages((prevImages) =>
    prevImages.includes(index)
      ? prevImages.filter((i) => i !== index)
      : [...prevImages, index]
  );
};