import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { getHotels } from '../services/hotels';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels().then(setHotels).catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar active="hotels" />
      <div style={{ flex: 1, background: '#f5f5f5', minHeight: '100vh' }}>
        <Topbar />
        <div style={{ padding: '30px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4>Liste des hôtels</h4>
              <p className="text-muted mb-0">Hôtels {hotels.length}</p>
            </div>
            <Link to="/hotels/create">
              <Button variant="dark">+ Créer un nouvel hôtel</Button>
            </Link>
          </div>
          <Row>
            {hotels.map((hotel) => (
              <Col md={3} className="mb-4 d-flex" key={hotel.id}>
                <Card className="h-100 w-100">
                  {hotel.photo && <Card.Img variant="top" src={hotel.photo} style={{ height: '150px', objectFit: 'cover' }} />}
                  <Card.Body className="d-flex flex-column">
                    <small className="text-danger" style={{ minHeight: '40px' }}>{hotel.address}</small>
                    <Card.Title style={{ fontSize: '1rem' }}>{hotel.name}</Card.Title>
                    <small className="mt-auto">{hotel.price_per_night} {hotel.currency} par nuit</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HotelList;