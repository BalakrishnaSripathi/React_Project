import React, { useReducer, useCallback, useEffect, useRef } from 'react';

// Initial state for the Fan & Remote
const initialState = {
  isOn: false,
  speed: 1, // Speeds 1 to 4
  lightOn: false,
};

// Reducer for managing complex switch state transitions
function fanReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_POWER':
      return { ...state, isOn: !state.isOn };
    case 'SET_SPEED':
      return { ...state, isOn: true, speed: action.payload };
    case 'TOGGLE_LIGHT':
      return { ...state, lightOn: !state.lightOn };
    case 'OFF':
      return { ...state, isOn: false };
    default:
      return state;
  }
}

export default function PremiumCeilingFanApp() {
  const [state, dispatch] = useReducer(fanReducer, initialState);
  const fanRef = useRef(null);
  const rotationAngle = useRef(0);
  const animFrameId = useRef(null);

  // Smooth rotation logic driven by requestAnimationFrame & dynamic speed calculation
  useEffect(() => {
    let lastTime = performance.now();

    const animateFan = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (state.isOn) {
        // Higher speed setting = faster degree rotation per frame
        const speedMultiplier = state.speed * 0.8;
        rotationAngle.current = (rotationAngle.current + delta * speedMultiplier) % 360;

        if (fanRef.current) {
          fanRef.current.style.transform = `rotate(${rotationAngle.current}deg)`;
        }
      }

      animFrameId.current = requestAnimationFrame(animateFan);
    };

    animFrameId.current = requestAnimationFrame(animateFan);

    return () => cancelAnimationFrame(animFrameId.current);
  }, [state.isOn, state.speed]);

  // Handler functions memoized with useCallback
  const handlePowerToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_POWER' });
  }, []);

  const handleSpeedChange = useCallback((speed) => {
    dispatch({ type: 'SET_SPEED', payload: speed });
  }, []);

  const handleLightToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_LIGHT' });
  }, []);

  return (
    <div style={styles.container}>
      {/* --- FAN SCENE CONTAINER --- */}
      <div style={styles.ceilingMount}>
        {/* Downrod */}
        <div style={styles.downrod} />

        {/* Fan Canopy & Body */}
        <div style={styles.fanBody}>
          {/* Ambient LED Center Light (Warm Glow) */}
          <div
            style={{
              ...styles.centerLight,
              boxShadow: state.lightOn
                ? '0 0 50px 20px rgba(251, 191, 36, 0.8), inset 0 0 15px rgba(251, 191, 36, 1)'
                : 'inset 0 2px 4px rgba(0,0,0,0.5)',
              backgroundColor: state.lightOn ? '#fde047' : '#334155',
            }}
          />

          {/* Rotating Blades Unit */}
          <div ref={fanRef} style={styles.bladesContainer}>
            {[0, 90, 180, 270].map((angle, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.blade,
                  transform: `rotate(${angle}deg) translateY(-85px)`,
                }}
              >
                {/* Decorative Metallic Inlay Trim */}
                <div style={styles.bladeTrim} />
              </div>
            ))}
          </div>
        </div>

        {/* Speed Wind Effect Indicator */}
        <div style={styles.statusBadge}>
          {state.isOn ? `SPEED LEVEL ${state.speed}` : 'FAN OFF'}
        </div>
      </div>

      {/* --- REMOTE CONTROL INTERFACE --- */}
      <div style={styles.remoteBody}>
        <div style={styles.remoteHeader}>
          <span style={styles.brandLogo}>LUX-FAN</span>
          <div
            style={{
              ...styles.ledIndicator,
              backgroundColor: state.isOn ? '#22c55e' : '#64748b',
              boxShadow: state.isOn ? '0 0 8px #22c55e' : 'none',
            }}
          />
        </div>

        <p style={styles.remoteSubtext}>Matt Finish Wireless Controller</p>

        {/* Main Power Button */}
        <button
          onClick={handlePowerToggle}
          style={{
            ...styles.powerBtn,
            backgroundColor: state.isOn ? '#ef4444' : '#334155',
          }}
        >
          {state.isOn ? 'POWER OFF' : 'POWER ON'}
        </button>

        {/* Speed Selection Grid */}
        <div style={styles.sectionLabel}>FAN SPEED</div>
        <div style={styles.speedGrid}>
          {[1, 2, 3, 4].map((spd) => (
            <button
              key={spd}
              onClick={() => handleSpeedChange(spd)}
              style={{
                ...styles.speedBtn,
                border: state.isOn && state.speed === spd ? '2px solid #38bdf8' : '2px solid transparent',
                backgroundColor: state.isOn && state.speed === spd ? '#0284c7' : '#1e293b',
              }}
            >
              {spd}
            </button>
          ))}
        </div>

        {/* Ambient Light Toggle */}
        <div style={styles.sectionLabel}>LIGHTING</div>
        <button
          onClick={handleLightToggle}
          style={{
            ...styles.lightBtn,
            backgroundColor: state.lightOn ? '#eab308' : '#1e293b',
            color: state.lightOn ? '#0f172a' : '#f8fafc',
          }}
        >
          {state.lightOn ? '💡 LIGHT OFF' : '💡 WARM LIGHT ON'}
        </button>
      </div>
    </div>
  );
}

/* Inline Styles object for zero external CSS dependency */
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0b0f19',
    padding: '2rem 1rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  ceilingMount: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
  },
  downrod: {
    width: '12px',
    height: '60px',
    backgroundColor: '#1e293b',
    borderRadius: '4px 4px 0 0',
    borderLeft: '2px solid #475569',
  },
  fanBody: {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#1e293b', // Dark Matt Finish
    border: '3px solid #334155',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerLight: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    zIndex: 10,
    transition: 'all 0.3s ease',
  },
  bladesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    willChange: 'transform',
  },
  blade: {
    position: 'absolute',
    width: '32px',
    height: '110px',
    backgroundColor: '#0f172a', // Matt finish blade texture
    borderRadius: '16px 16px 6px 6px',
    border: '1px solid #334155',
    transformOrigin: 'bottom center',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8px',
  },
  bladeTrim: {
    width: '4px',
    height: '40px',
    backgroundColor: '#d97706', // Premium brass/gold decorative trim line
    borderRadius: '2px',
  },
  statusBadge: {
    marginTop: '7.5rem',
    color: '#94a3b8',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    backgroundColor: '#1e293b',
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid #334155',
  },
  /* Remote Control Styles */
  remoteBody: {
    width: '240px',
    backgroundColor: '#1e293b', // Matt finish body
    borderRadius: '24px',
    padding: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  remoteHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandLogo: {
    color: '#f8fafc',
    fontSize: '0.8rem',
    fontWeight: '800',
    letterSpacing: '0.15em',
  },
  ledIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
  remoteSubtext: {
    color: '#64748b',
    fontSize: '0.7rem',
    margin: '-8px 0 4px 0',
  },
  sectionLabel: {
    color: '#94a3b8',
    fontSize: '0.65rem',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    marginTop: '4px',
  },
  powerBtn: {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    transition: 'background-color 0.2s ease',
  },
  speedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
  speedBtn: {
    padding: '10px',
    borderRadius: '8px',
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  lightBtn: {
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};