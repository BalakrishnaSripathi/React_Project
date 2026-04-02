import React from 'react';
import { useGeolocation } from './useGeolocation'; // Assuming the hook is in a hooks folder

const GeolocationDisplay = () => {
  // We pass options to get the most precise data possible
  const location = useGeolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });

  // 1. Handle Loading State
  if (location.loading) {
    return (
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p>Requesting GPS permissions...</p>
      </div>
    );
  }

  // 2. Handle Error State (Permission denied, timeout, etc.)
  if (location.error) {
    return (
      <div style={{ ...styles.container, color: '#d9534f' }}>
        <h3>Location Error</h3>
        <p>{location.error.message}</p>
        <button onClick={() => window.location.reload()} style={styles.button}>
          Retry
        </button>
      </div>
    );
  }

  // 3. Success State
  const googleMapsUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>GPS Data</h2>
      
      <div style={styles.card}>
        <div style={styles.row}>
          <strong>Latitude:</strong> <span>{location.latitude?.toFixed(6)}</span>
        </div>
        <div style={styles.row}>
          <strong>Longitude:</strong> <span>{location.longitude?.toFixed(6)}</span>
        </div>
        <div style={styles.row}>
          <strong>Accuracy:</strong> <span>{Math.round(location.accuracy)} meters</span>
        </div>
        {location.speed && (
          <div style={styles.row}>
            <strong>Speed:</strong> <span>{(location.speed * 3.6).toFixed(2)} km/h</span>
          </div>
        )}
        <div style={styles.row}>
          <strong>Last Updated:</strong> 
          <span>{new Date(location.timestamp).toLocaleTimeString()}</span>
        </div>
      </div>

      <a 
        href={googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.linkButton}
      >
        View on Google Maps
      </a>
    </div>
  );
};

// Simple inline styles for the demo
const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f7f6',
    borderRadius: '12px',
    maxWidth: '400px',
    margin: '2rem auto',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  title: { color: '#2c3e50', marginBottom: '1.5rem' },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee'
  },
  button: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px'
  },
  linkButton: {
    display: 'block',
    padding: '0.8rem 1.2rem',
    backgroundColor: '#2ecc71',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold'
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  }
};

export default GeolocationDisplay;