import React, { useState, useEffect } from 'react';

// Custom Hook Implementation
export function useBattery() {
  const [batteryState, setBatteryState] = useState({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    // Check if the Battery Status API is supported in the browser
    if (!navigator || !('getBattery' in navigator)) {
      setBatteryState({
        supported: false,
        loading: false,
        level: null,
        charging: null,
        chargingTime: null,
        dischargingTime: null,
      });
      return;
    }

    let battery = null;

    const updateBatteryInfo = (b) => {
      setBatteryState({
        supported: true,
        loading: false,
        level: b.level,
        charging: b.charging,
        chargingTime: b.chargingTime,
        dischargingTime: b.dischargingTime,
      });
    };

    const handleChange = () => {
      if (battery) updateBatteryInfo(battery);
    };

    navigator.getBattery().then((b) => {
      battery = b;
      updateBatteryInfo(b);

      // Listen for battery property changes dynamically
      b.addEventListener('levelchange', handleChange);
      b.addEventListener('chargingchange', handleChange);
      b.addEventListener('chargingtimechange', handleChange);
      b.addEventListener('dischargingtimechange', handleChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', handleChange);
        battery.removeEventListener('chargingchange', handleChange);
        battery.removeEventListener('chargingtimechange', handleChange);
        battery.removeEventListener('dischargingtimechange', handleChange);
      }
    };
  }, []);

  return batteryState;
}

// Component Demonstrating How to Use the Hook
export default function BatteryStatusWidget() {
  const battery = useBattery();

  if (!battery.supported) {
    return (
      <div style={{ padding: '1rem', border: '1px solid #f87171', borderRadius: '8px', color: '#991b1b' }}>
        <strong>Battery Status API is not supported in this browser.</strong>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>Note: Chrome, Edge, and Opera support this API; Firefox and Safari do not.</p>
      </div>
    );
  }

  if (battery.loading) {
    return <div>Fetching battery details...</div>;
  }

  const levelPercent = Math.round(battery.level * 100);

  return (
    <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px', maxWidth: '320px', fontFamily: 'sans-serif' }}>
      <h2>Battery Status</h2>
      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
        {levelPercent}% {battery.charging ? '⚡' : '🔋'}
      </div>

      <p><strong>Status:</strong> {battery.charging ? 'Charging' : 'Discharging'}</p>
      {battery.chargingTime !== null && battery.chargingTime !== Infinity && (
        <p><strong>Time until full:</strong> {Math.round(battery.chargingTime / 60)} minutes</p>
      )}
      {battery.dischargingTime !== null && battery.dischargingTime !== Infinity && (
        <p><strong>Time remaining:</strong> {Math.round(battery.dischargingTime / 60)} minutes</p>
      )}
    </div>
  );
}