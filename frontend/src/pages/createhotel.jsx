import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import api from '../services/api';

function CreateHotel() {
  const [form, setForm] = useState({
    name: '', address: '', email: '', phone: '', price_per_night: '', currency: 'XOF',
  });
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(form).forEach((key) => data.append(key, form[key]));
      if (photo) data.append('photo', photo);

      await api.post('hotels/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/hotels');
    } catch (err) {
      alert('Erreur lors de la création');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar active="hotels" />
      <div style={{ flex: 1, padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
        <h5 className="mb-4">← CRÉER UN NOUVEL HÔTEL</h5>
        <div className="bg-white p-4 rounded" style={{ maxWidth: '700px' }}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Nom de l'hôtel</Form.Label>
                <Form.Control name="name" onChange={handleChange} required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Adresse</Form.Label>
                <Form.Control name="address" onChange={handleChange} required />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" type="email" onChange={handleChange} required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control name="phone" onChange={handleChange} required />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Prix par nuit</Form.Label>
                <Form.Control name="price_per_night" type="number" onChange={handleChange} required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Devise</Form.Label>
                <Form.Select name="currency" onChange={handleChange}>
                  <option value="XOF">F XOF</option>
                  <option value="EUR">Euro</option>
                  <option value="USD">Dollar</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Ajouter une photo</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
            </Form.Group>
            <div className="text-end mt-3">
              <Button variant="dark" type="submit">Enregistrer</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateHotel;