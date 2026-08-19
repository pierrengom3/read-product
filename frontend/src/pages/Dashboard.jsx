import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/topbar';
import { Card, Row, Col } from 'react-bootstrap';
import { getHotels } from '../services/hotels';

function Dashboard() {
  const [stats, setStats] = useState([
    { label: 'Formulaires', value: 125, color: '#8e44ad', icon: 'bi-folder2' },
    { label: 'Messages', value: 40, color: '#16a085', icon: 'bi-chat-dots' },
    { label: 'Utilisateurs', value: 600, color: '#f1c40f', icon: 'bi-people' },
    { label: 'E-mails', value: 25, color: '#e74c3c', icon: 'bi-envelope' },
    { label: 'Hôtels', value: 0, color: '#8e44ad', icon: 'bi-building' },
    { label: 'Entités', value: 2, color: '#2980b9', icon: 'bi-diagram-3' },
  ]);

  useEffect(() => {
    const fetchHotelsCount = async () => {
      try {
        const res = await getHotels();
        const count = Array.isArray(res) ? res.length : (res.count ?? 0);
        setStats((prev) =>
          prev.map((s) => (s.label === 'Hôtels' ? { ...s, value: count } : s))
        );
      } catch (err) {
        console.error('Erreur récupération hôtels:', err);
      }
    };
    fetchHotelsCount();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar active="dashboard" />
      <div style={{ flex: 1, background: '#f5f5f5', minHeight: '100vh' }}>
        <Topbar />
        <div style={{ padding: '30px' }}>
          <h4>Dashboard</h4>
          <h3>Bienvenue sur RED Product</h3>
          <p className="text-muted">Gérez vos hôtels et suivez votre activité</p>
          <Row className="mt-4">
            {stats.map((stat, i) => (
              <Col md={4} className="mb-3" key={i}>
                <Card className="p-3 d-flex flex-row align-items-center">
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: stat.color,
                      marginRight: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '18px',
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <div>
                    <h5 className="mb-0">{stat.value}</h5>
                    <small className="text-muted">{stat.label}</small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;