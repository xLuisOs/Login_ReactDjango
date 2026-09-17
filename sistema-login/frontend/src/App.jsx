import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });

      localStorage.setItem('token', response.data.access);
      setMessage('¡Autenticación exitosa! Token guardado.');
      setIsError(false);
    } catch (error) {
      setMessage('Error de autenticación: Credenciales incorrectas.');
      setIsError(true);
    }
  };

  return (
    <div style={styles.background}>
      <style>{keyframes}</style>

      {/* Manchas de luz flotantes, animación única y sutil */}
      <div style={styles.blobBlue} />
      <div style={styles.blobPurple} />

      <div style={styles.card}>
        <div style={styles.brandRow}>
          <div style={styles.brandMark}>◆</div>
          <span style={styles.brandName}>LOG</span>
        </div>

        <h1 style={styles.title}>Iniciar sesión</h1>
        <p style={styles.subtitle}>
          Ingresa tus credenciales para acceder a la API de autenticación.
        </p>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="username">Usuario</label>
            <input
              id="username"
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = '#A78BFA')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = '#A78BFA')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            Ingresar
          </button>
        </form>

        {message && (
          <div
            style={{
              ...styles.messageBox,
              backgroundColor: isError ? 'rgba(239, 68, 68, 0.12)' : 'rgba(52, 211, 153, 0.12)',
              color: isError ? '#FCA5A5' : '#6EE7B7',
              borderColor: isError ? 'rgba(252, 165, 165, 0.35)' : 'rgba(110, 231, 183, 0.35)',
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

const keyframes = `
  @keyframes drift {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(24px, -18px) scale(1.06); }
    100% { transform: translate(0, 0) scale(1); }
  }
`;

const styles = {
  background: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0F2E',
    backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(37,99,235,0.18), transparent 45%), radial-gradient(circle at 85% 80%, rgba(124,58,237,0.22), transparent 45%)',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: '1.5rem',
    overflow: 'hidden',
  },
  blobBlue: {
    position: 'absolute',
    width: '360px',
    height: '360px',
    borderRadius: '50%',
    top: '-80px',
    left: '-80px',
    background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)',
    filter: 'blur(10px)',
    animation: 'drift 14s ease-in-out infinite',
  },
  blobPurple: {
    position: 'absolute',
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    bottom: '-120px',
    right: '-100px',
    background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(124,58,237,0) 70%)',
    filter: 'blur(10px)',
    animation: 'drift 18s ease-in-out infinite reverse',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    borderRadius: '20px',
    padding: '2.75rem 2.25rem',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  brandMark: {
    fontSize: '1.1rem',
    color: '#A78BFA',
  },
  brandName: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#E5E7EB',
    letterSpacing: '0.02em',
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: '700',
    color: '#F9FAFB',
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#9CA3AF',
    margin: '0 0 2rem 0',
    lineHeight: '1.5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#D1D5DB',
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    color: '#F9FAFB',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.9rem',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
    color: '#FFFFFF',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.35)',
    transition: 'transform 0.15s ease',
  },
  messageBox: {
    marginTop: '1.25rem',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: '1px solid',
    textAlign: 'center',
  },
};

export default App;