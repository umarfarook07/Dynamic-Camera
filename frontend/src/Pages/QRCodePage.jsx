import { QRCode } from 'react-qr-code';
import { FaCamera } from 'react-icons/fa';

const QRCodePage = () => {
  const cameraPageUrl = `${window.location.origin}/camera`;

  return (
    <div className="qr-container">
      <h1 className="qr-heading">Scan the QR Code to Open Camera</h1>
      <div className="qr-code-container">
        <QRCode value={cameraPageUrl} size={256} />
      </div>
      <p className="qr-instruction">
        <FaCamera /> Use your mobile device to scan the QR code.
      </p>
    </div>
  );
};

export default QRCodePage;
