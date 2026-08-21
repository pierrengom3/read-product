import { useNavigate } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { logout } from '../services/auth';

function Topbar({ onSearch }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className="d-flex justify-content-end align-items-center px-4"
      style={{ height: '60px', background: '#fff', borderBottom: '1px solid #eee' }}
    >
      <InputGroup style={{ maxWidth: '250px' }} className="me-3">
        <InputGroup.Text style={{ background: '#fff', borderRight: 'none' }}>
          🔍
        </InputGroup.Text>
        <Form.Control
          placeholder="Recherche"
          style={{ borderLeft: 'none' }}
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </InputGroup>

      <div style={{ position: 'relative', marginRight: '15px', fontSize: '18px' }}>
        🔔
        <span
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-6px',
            background: '#f1c40f',
            borderRadius: '50%',
            width: '14px',
            height: '14px',
            fontSize: '10px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          1
        </span>
      </div>

      <div style={{ position: 'relative', marginRight: '15px' }}>
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Pierre Ngom"
          style={{ width: '34px', height: '34px', borderRadius: '50%', display: 'block' }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#2ecc71',
            border: '2px solid #fff',
          }}
        />
      </div>

      <button className="btn btn-sm btn-outline-dark d-flex align-items-center" onClick={handleLogout}>
        <i className="bi bi-box-arrow-right"></i>
      </button>
    </div>
  );
}

export default Topbar;