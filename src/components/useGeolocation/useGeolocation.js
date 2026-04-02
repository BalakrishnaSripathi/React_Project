import { useState, useEffect } from 'react';

/**
 * useGeolocation Hook
 * @param {Object} options - PositionOptions (enableHighAccuracy, timeout, maximumAge)
 */
export function useGeolocation(options = {}) {
  const [state, setState] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  useEffect(() => {
    // Check if the browser supports the Geolocation API
    if (!navigator.geolocation) {
      setState((s) => ({
        ...s,
        loading: false,
        error: new Error("Geolocation is not supported by your browser"),
      }));
      return;
    }

    // Success handler
    const onSuccess = (position) => {
      setState({
        loading: false,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
        timestamp: position.timestamp,
        error: null,
      });
    };

    // Error handler
    const onError = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error: error,
      }));
    };

    // Start tracking
    // watchPosition returns a numeric ID we use to stop tracking later
    const watchId = navigator.geolocation.watchPosition(
      onSuccess,
      onError,
      options
    );

    // Cleanup: This is crucial! 
    // It stops the GPS hardware when the component is destroyed.
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [options]); // Re-run if options change

  return state;
}