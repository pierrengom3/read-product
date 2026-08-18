import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';

function Sidebar({ active }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ width: '220px', background: '#3d4149', minHeight: '100vh', color: 'white', padding: '20px 0' }}>
      <h5 className="px-3 mb-4">🚩 RED PRODUCT</h5>
      <div className="px-3 text-muted small mb-2">Principal</div>
      <Link
        to="/dashboard"
        className={`d-block px-3 py-2 text-decoration-none ${active === 'dashboard' ? 'bg-light text-dark' : 'text-white'}`}
      >
        📊 Dashboard
      </Link>
      <Link
        to="/hotels"
        className={`d-block px-3 py-2 text-decoration-none ${active === 'hotels' ? 'bg-light text-dark' : 'text-white'}`}
      >
        🏨 Liste des hôtels
      </Link>
      <div style={{ position: 'absolute', bottom: '20px', width: '220px' }}>
        <div className="px-3 d-flex justify-content-between align-items-center">
          <span>👤 Mon compte</span>
          <button className="btn btn-sm btn-outline-light" onClick={handleLogout}>Déconnexion</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;