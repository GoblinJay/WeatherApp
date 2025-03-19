
import React from 'react';
import { Paper } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useWeather } from '../context/WeatherContext';

function WeatherMap() {
  const { location } = useWeather();
  const position = location ? [location.lat, location.lon] : [51.505, -0.09];

  return (
    <Paper sx={{ p: 3 }}>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && (
          <Marker position={position}>
            <Popup>{location.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </Paper>
  );
}

export default WeatherMap;
