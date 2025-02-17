/* eslint-disable react/prop-types */
import Button from './Button';
const ControlButtons = ({
  onToggleMirror,
  onToggleFacingMode,
  onCapture,
  onSendImages,
  setCameraOptions,
  canvasRef,
  videoRef,
  setCapturedImages,
  selectedImages,
  capturedImages,
}) => (
  <div className="control-buttons-container">
    <Button onClick={() => onToggleMirror(setCameraOptions)}>Mirror</Button>
    <Button onClick={() => onToggleFacingMode(setCameraOptions)}>
      Toggle Camera
    </Button>
    <Button onClick={() => onCapture(canvasRef, videoRef, setCapturedImages)}>
      Capture
    </Button>
    <Button onClick={() => onSendImages(selectedImages, capturedImages)}>
      Send Images
    </Button>
  </div>
);

export default ControlButtons;
