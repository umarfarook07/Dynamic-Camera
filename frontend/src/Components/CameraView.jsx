/* eslint-disable react/prop-types */
const CameraView = ({ videoRef, mirror }) => {
  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className={`camera-view ${mirror ? 'mirror' : ''}`}
    />
  );
};

export default CameraView;
