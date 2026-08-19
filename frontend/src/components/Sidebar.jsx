import { Link } from 'react-router-dom';

function DashboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="me-2" style={{ flexShrink: 0 }}>
      <rect x="0" y="0" width="7" height="7" rx="1" fill="currentColor" />
      <rect x="9" y="0" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="0" y="9" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="7" y="7" width="7" height="7" rx="1" fill="currentColor" />
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="me-2" style={{ flexShrink: 0 }}>
      <rect x="0.5" y="1" width="15" height="10" rx="1.5" fill="#e74c3c" />
      <rect x="3" y="4" width="10" height="1.2" fill="#fff" />
      <rect x="3" y="6.4" width="7" height="1.2" fill="#fff" />
      <rect x="6.5" y="12" width="3" height="1.5" fill="#e74c3c" />
      <rect x="4.5" y="13.6" width="7" height="1" rx="0.5" fill="#e74c3c" />
    </svg>
  );
}

function Sidebar({ active }) {
  return (
    <div style={{ width: '220px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#fff', padding: '18px 16px', borderBottom: '1px solid #eee' }}>
        <h5 className="mb-0 d-flex align-items-center" style={{ color: '#000' }}>
          <i className="bi bi-flag-fill me-2" style={{ color: '#000', fontSize: '18px' }}></i>
          RED PRODUCT
        </h5>
      </div>

      <div
        style={{
          flex: 1,
          background: `
            linear-gradient(#3d4149, #3d4149),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)
          `,
          backgroundBlendMode: 'overlay',
          color: 'white',
          padding: '20px 0',
          position: 'relative',
        }}
      >
        <div className="px-3 small mb-2" style={{ color: '#c5c7cc' }}>Principal</div>
        <Link
          to="/dashboard"
          className={`d-flex align-items-center px-3 py-2 text-decoration-none ${active === 'dashboard' ? 'bg-light text-dark' : 'text-white'}`}
        >
          <DashboardIcon />
          Dashboard
        </Link>
        <Link
          to="/hotels"
          className={`d-flex align-items-center px-3 py-2 text-decoration-none ${active === 'hotels' ? 'bg-light text-dark' : 'text-white'}`}
        >
          <ScreenIcon />
          Liste des hôtels
        </Link>

        <div style={{ position: 'absolute', bottom: '20px', width: '220px' }}>
          <div className="px-3 d-flex align-items-center">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Pierre Ngom"
              style={{ width: '34px', height: '34px', borderRadius: '50%', marginRight: '10px', flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: '14px' }}>Pierre Ngom</div>
              <div className="d-flex align-items-center" style={{ fontSize: '12px', color: '#8fd19e' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#2ecc71',
                    marginRight: '5px',
                    display: 'inline-block',
                  }}
                />
                en ligne
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;