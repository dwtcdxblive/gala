import './App.scss';
import HostessPage from './components/HostessPage';
import AdminPage from './components/AdminPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Tables from './components/Tables';
import PalaceCheckIn from './components/PalaceCheckIn';
import PalaceAdmin from './components/PalaceAdmin';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/hostess' />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/hostess' element={<HostessPage />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/PalacePointPage' element={<PalaceAdmin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
