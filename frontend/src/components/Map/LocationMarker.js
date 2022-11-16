import React, { useRef, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
const LocationMarker = ({ getPosition }) => {
  const [position, setPosition] = useState(null);
  const markerRef = useRef(null);


  const map = useMapEvents({
    click() {
      map.locate();
      const marker = markerRef.current;
      if (marker) {
        marker.openPopup();
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
      getPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return position === null ? null : (
    <>
      <Marker ref={markerRef} position={position}>
        <Popup>You are here!!</Popup>
      </Marker>
    </>
  );
};

export default LocationMarker;
