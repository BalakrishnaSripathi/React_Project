import React from "react";
import useGeolocation from "./useGeolocation";

const GeolocationApp = () => {
  const { coords, error } = useGeolocation();

  return (
    <div>
      <h2>Live Location</h2>

      {error && <p>Error: {error}</p>}

      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
      <p>Accuracy: {coords.accuracy} meters</p>
    </div>
  );
};

export default GeolocationApp;