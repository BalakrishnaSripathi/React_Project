import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapApp() {
  const restaurant = [17.385, 78.4867];

  const deliveryBoy = [17.395, 78.4967];

  const customer = [17.405, 78.5067];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Food Delivery Tracking App
        </h1>

        {/* Order Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-bold text-xl mb-2">
              🍽 Restaurant
            </h2>

            <p>Biryani House</p>

            <p className="text-green-600 mt-2">
              Preparing Order
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-bold text-xl mb-2">
              🛵 Delivery Partner
            </h2>

            <p>Rahul Kumar</p>

            <p className="text-blue-600 mt-2">
              On The Way
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="font-bold text-xl mb-2">
              🏠 Customer
            </h2>

            <p>Balakrishna</p>

            <p className="text-purple-600 mt-2">
              Waiting For Delivery
            </p>
          </div>

        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <MapContainer
            center={restaurant}
            zoom={13}
            scrollWheelZoom={true}
            style={{
              height: "600px",
              width: "100%",
            }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Restaurant Marker */}
            <Marker position={restaurant}>
              <Popup>
                🍽 Biryani House
              </Popup>
            </Marker>

            {/* Delivery Marker */}
            <Marker position={deliveryBoy}>
              <Popup>
                🛵 Rahul Kumar
              </Popup>
            </Marker>

            {/* Customer Marker */}
            <Marker position={customer}>
              <Popup>
                🏠 Customer Location
              </Popup>
            </Marker>

            {/* Delivery Route */}
            <Polyline
              positions={[
                restaurant,
                deliveryBoy,
                customer,
              ]}
            />

          </MapContainer>

        </div>

      </div>

    </div>
  );
}

export default MapApp;