import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Branches = () => {
  const cities = [
    { name: 'Panchkula', coordinates: [30.6942, 76.8606] },
    { name: 'Chandigarh', coordinates: [30.7333, 76.7794] },
    { name: 'Zirakpur', coordinates: [30.6420, 76.8174] },
    { name: 'Mohali', coordinates: [30.7046, 76.7179] },
  ];

  const mapRef = useRef(null);

  const handleScroll = (event) => {
    event.stopPropagation();
  };

  const MapComponent = () => {
    const map = useMap();

    cities.forEach((city) => {
      const marker = L.marker(city.coordinates).addTo(map);
      marker.bindPopup(`<b>${city.name}</b>`).openPopup();
    });

    return null;
  };

  return (
    <section className="bg-gradient-to-r from-#2C3E5 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Branches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-white border-1 border-black p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-black">{city.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8" onWheel={handleScroll}>
          <div style={{ height: '400px', border: '2px solid #4CAF50', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} ref={mapRef}>
            <MapContainer center={[28.6139, 77.2090]} zoom={10} style={{ height: '100%' }} scrollWheelZoom={false} doubleClickZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <MapComponent />
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
