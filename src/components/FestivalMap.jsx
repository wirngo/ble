import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const FestivalMap = () => {
  const festivalLocation = [4.0511, 9.7679]; // Coordinates for Bamenda, Cameroon

  return (
    <div className="h-96 w-full">
      <MapContainer center={festivalLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={festivalLocation}>
          <Popup>
            BLE Reggae Festival <br /> Main Stage
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FestivalMap;
