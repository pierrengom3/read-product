import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fonctionnalité à venir');
  };

  return (
    <div style={{ background: '#3d4149', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container style={{ maxWidth: '400px' }}>
        <h3 className="text-white text-center mb-4">🚩 RED PRODUCT</h3>
        <Card className="p-4">
          <h6>Mot de passe oublié?</h6>
          <p className="text-muted small">
            Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Envoyer
            </Button>
          </Form>
        </Card>
        <div className="text-center mt-3">
          <span className="text-white">Revenir à la </span>
          <Link to="/login" className="text-warning">connexion</Link>
        </div>
      </Container>
    </div>
  );
}

export default ForgotPassword;