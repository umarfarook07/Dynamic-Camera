import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CameraPage from './Pages/CameraPage';
import QRCodePage from './pages/QRCodePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/camera" element={<CameraPage />} />
      </Routes>
    </Router>
  );
};

export default App;
