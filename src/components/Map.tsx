import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { IMapProps } from "../types/types";
import iconLocation from "../assets/images/icon-location.svg";

import "leaflet/dist/leaflet.css";
import "../css/map.css";

export const Map = ({ data }: IMapProps) => {
  const { latitude, longitude } = data;
  const location = [latitude, longitude] as [number, number];

  const ChangeLocation = () => {
    const map = useMap();

    map.flyTo(location, 14, {
      duration: 3,
    });

    return null;
  };

  return (
    <MapContainer center={location} zoom={14} scrollWheelZoom={false} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeLocation />
      <Marker
        position={location}
        icon={L.icon({
          iconUrl: iconLocation,
          iconSize: [45, 45],
        })}
      >
        <Popup>
          {latitude} / {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
