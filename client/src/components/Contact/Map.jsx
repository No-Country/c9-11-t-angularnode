import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./map.css";
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={15}
      center={[-34.607165, -58.446850]}
    >
      <TileLayer
      attribution='Urban Food'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.607165, -58.446850]}>
        <Popup>
          Estamos acá
        </Popup>
      </Marker>
  </MapContainer>
  );
}