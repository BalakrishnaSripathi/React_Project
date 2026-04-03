import React, { useState, useEffect } from 'react';
import { useGeolocation } from './useGeolocation';

const LocationDetails = () => {
  // Use the hook to get coordinates
  const { latitude, longitude, loading, error } = useGeolocation();
  
  // State for the reverse-geocoded address
  const [address, setAddress] = useState({ 
    suburb: '', 
    city: '', 
    state: '', 
    loading: false 
  });

  useEffect(() => {
    if (latitude && longitude) {
      setAddress((prev) => ({ ...prev, loading: true }));

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then((res) => res.json())
        .then((data) => {
          const addr = data.address || {};
          setAddress({
            suburb: addr.suburb || addr.neighbourhood || addr.residential || 'N/A',
            city: addr.city || addr.town || addr.village || 'Unknown City',
            state: addr.state || 'Unknown State',
            loading: false,
          });
        })
        .catch((err) => {
          console.error("Geocoding error:", err);
          setAddress((prev) => ({ ...prev, loading: false }));
        });
    }
  }, [latitude, longitude]);

  // 1. Loading State (GPS Initializing)
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
        <p className="text-gray-600 font-medium">Finding your coordinates...</p>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="max-w-sm mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-xl">
        <h3 className="text-red-800 font-bold mb-2">Location Error</h3>
        <p className="text-red-600 text-sm">{error.message}</p>
      </div>
    );
  }

  // 3. Success State
  return (
    <div className="max-w-md mx-auto mt-10 overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-lg transition-all hover:shadow-xl">
      <div className="bg-blue-600 p-4">
        <h2 className="text-white text-xl font-bold flex items-center tracking-tight">
          <span className="mr-2">📍</span> Your Location
        </h2>
      </div>

      <div className="p-6">
        {address.loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500 font-medium">Suburb</span>
              <span className="text-gray-900 font-semibold">{address.suburb}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500 font-medium">City</span>
              <span className="text-gray-900 font-semibold">{address.city}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-500 font-medium">State</span>
              <span className="text-gray-900 font-semibold">{address.state}</span>
            </div>

            <div className="mt-6 pt-4 bg-gray-50 rounded-lg p-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                Raw Coordinates
              </p>
              <div className="flex justify-between text-xs font-mono text-gray-500">
                <span>Lat: {latitude?.toFixed(6)}</span>
                <span>Lon: {longitude?.toFixed(6)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDetails;