import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { login } from '../services/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div style={{ background: '#3d4149', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container style={{ maxWidth: '400px' }}>
        <h3 className="text-white text-center mb-4">🚩 RED PRODUCT</h3>
        <Card className="p-4">
          <p className="text-muted">Connectez-vous en tant que Admin</p>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="E-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Gardez-moi connecté" />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Se connecter
            </Button>
          </Form>
        </Card>
        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-warning d-block mb-2">Mot de passe oublié?</Link>
          <span className="text-white">Vous n'avez pas de compte? </span>
          <Link to="/register" className="text-warning">S'inscrire</Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;