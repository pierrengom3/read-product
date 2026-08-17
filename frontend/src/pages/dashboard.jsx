import Sidebar from '../components/Sidebar';
import { Card, Row, Col } from 'react-bootstrap';

function Dashboard() {
  const stats = [
    { label: 'Formulaires', value: 125, color: '#8e44ad' },
    { label: 'Messages', value: 40, color: '#16a085' },
    { label: 'Utilisateurs', value: 600, color: '#f1c40f' },
    { label: 'E-mails', value: 25, color: '#e74c3c' },
    { label: 'Hôtels', value: 40, color: '#8e44ad' },
    { label: 'Entités', value: 2, color: '#2980b9' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar active="dashboard" />
      <div style={{ flex: 1, padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
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
                  }}
                ></div>
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
  );
}

export default Dashboard;