import React, { useRef, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { userAction } from "../../Redux/Slices/User";
const LocationMarker = ({getPosition}) => {
  const [position, setPosition] = useState(null);
  const markerRef = useRef(null)
  const dispatch = useDispatch();
  const map = useMapEvents({
    click() {
      map.locate();
      const marker = markerRef.current
      if (marker) {
        marker.openPopup();
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
      getPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  if (position !== null) {
    dispatch(userAction.userLatLng(position));
  }
  return(
    
   position === null ? null : (
    <>
      <Marker ref={markerRef} position= {position}>
        <Popup>You are here</Popup>
      </Marker>
    </>
  )
  );
};

export default LocationMarker;
