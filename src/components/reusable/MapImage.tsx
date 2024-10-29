import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapImage: FC<{ latitude?: string; longitude?: string }> = ({
  latitude,
  longitude,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      {latitude === undefined || longitude === undefined ? (
        <></>
      ) : (
        <MapContainer
          center={[
            Number.parseFloat(latitude),
            Number.parseFloat(longitude),
          ]}
          zoom={20}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              Number.parseFloat(latitude),
              Number.parseFloat(longitude),
            ]}
          >
            <Popup>
             
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapImage;
