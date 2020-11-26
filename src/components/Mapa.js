import React, { Fragment } from "react";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ latitud, longitud, ipAddress, ciudad, pais }) => {
  const latitude = latitud;
  const longitude = longitud;
  let position = [latitude, longitude];
  return (
    <Fragment>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            La dirección ip: {ipAddress} se encuentra aquí
            <br /> {ciudad}, {pais}
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
};

export default Mapa;
