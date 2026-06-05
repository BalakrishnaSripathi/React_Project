import { useState } from "react";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import RoutingMachine from "./RoutingMachine";

export default function MapApp() {
  const [restaurant, setRestaurant] = useState("");
  const [customer, setCustomer] = useState("");

  const [route, setRoute] = useState(null);

  const handleTrack = async () => {
    try {
      const restaurantRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${restaurant}`
      );

      const restaurantData = await restaurantRes.json();

      const customerRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${customer}`
      );

      const customerData = await customerRes.json();

      if (
        restaurantData.length &&
        customerData.length
      ) {
        setRoute({
          start: [
            parseFloat(restaurantData[0].lat),
            parseFloat(restaurantData[0].lon),
          ],
          end: [
            parseFloat(customerData[0].lat),
            parseFloat(customerData[0].lon),
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Food Delivery Route Tracker
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Restaurant Address"
              value={restaurant}
              onChange={(e) =>
                setRestaurant(e.target.value)
              }
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Customer Address"
              value={customer}
              onChange={(e) =>
                setCustomer(e.target.value)
              }
              className="border p-3 rounded-lg"
            />

          </div>

          <button
            onClick={handleTrack}
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Show Optimal Route
          </button>

        </div>

        <MapContainer
          center={[17.385, 78.4867]}
          zoom={12}
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {route && (
            <RoutingMachine
              start={route.start}
              end={route.end}
            />
          )}
        </MapContainer>

      </div>

    </div>
  );
}