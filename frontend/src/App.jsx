import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import HotelList from './pages/HotelList';
import CreateHotel from './pages/CreateHotel';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/hotels" element={<ProtectedRoute><HotelList /></ProtectedRoute>} />
        <Route path="/hotels/create" element={<ProtectedRoute><CreateHotel /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;