import React, { useState } from "react";
import "./map.css";
import L, { map } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { useSelector } from "react-redux";

const Map = () => {
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const ResPosition = [
    restaurant?.restaurant_latitude,
    restaurant?.restaurant_longitude,
  ];
  const [userPosition, setUserPosition] = useState({});

  console.log("userPosition>>>>", userPosition);
  const getPosition = (userpostion) => {
    setUserPosition(userpostion);
  };

  // Routing Control ===>
  const layerComponents = () => {
    const instance = L.Routing.control({
      waypoints: [L.latLng(ResPosition), L.latLng(userPosition)],
      lineOptions: {
        styles: [{ color: "#00B0FF", weight: 4 }],
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    });
    console.log('instance>>>', instance._selectedRoute)
    
    return instance;
  };
  const HandleRoutingMachine = createControlComponent(layerComponents);
  // -------------------------------------------------------------------

  return (
    <div className="map">
      <MapContainer center={ResPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker  position={ResPosition}>
        </Marker>
        {/* <Marker position={[21.192338854686287, 72.78746056892774]}></Marker> */}
        <HandleRoutingMachine />
        <LocationMarker getPosition={getPosition} />
      </MapContainer><br />
      <button className="btn btn-success" onClick={() => map}>
        Click on to map for finding your current location!!!{" "}
      </button>
    </div>
  );
};
export default Map;
