import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';
import Gigsterr from './pages/GigsterrApp';
import ActivityPage from './pages/ActivityPage';
import VectorCharacteristicsPage from './pages/VectorCharacteristicsPage';
import GoogleMaps from './pages/GoogleMaps.jsx';
import ImaxOptics from './pages/ImaxOptics.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-am-i" element={<WhoAmI />} />
        <Route path="/work" element={<Gigsterr/>} />
        <Route path="/work/gigsterr" element={<Gigsterr />} />
        <Route path="/work/i-max-optics" element={<ImaxOptics />} />
        <Route path="/work/vector-characters-design" element={<VectorCharacteristicsPage />} />
        <Route path="/work/my-activities" element={<ActivityPage />} />
        <Route path="/work/google-maps-alarm-system" element={<GoogleMaps />} />
      </Routes>
    </div>
  );
}

export default App;