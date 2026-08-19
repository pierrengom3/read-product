function Topbar() {
  return (
    <div style={{ position: 'relative', marginRight: '15px' }}>
      <img
        src="https://i.pravatar.cc/40?img=12"
        alt="Pierre Ngom"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          display: 'block'
        }}
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
          border: '2px solid #fff'
        }}
      />
    </div>
  );
}

export default Topbar;