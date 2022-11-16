import React, { useEffect, useState } from "react";
import "./map.css";
import L, { map } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { userAction } from "../../Redux/Slices/User";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { useDispatch, useSelector } from "react-redux";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const Map = () => {
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const dispatch = useDispatch()
  const ResPosition = [
    restaurant?.restaurant_latitude,
    restaurant?.restaurant_longitude,
  ];
  const [userPosition, setUserPosition] = useState({});

  const getPosition = (userpostion) => {
    setUserPosition(userpostion);
  };


  // Routing Control ===>
  const [totalDistance, setTotalDistance] = useState('')
  const [totalTime, setTotalTime] = useState('')
  const [name, setName] = useState('')

  
  function layerComponents() {
    const instance = L.Routing.control({
      waypoints: [L.latLng(ResPosition), L.latLng(userPosition)],
      lineOptions: {
        styles: [{ color: "#00B0FF", weight: 4 }],
      },
      show: false,
      addWaypoints: true,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).on('routesfound', function(e) {
      setTotalDistance(e.routes[0].summary.totalDistance)
      setTotalTime(e.routes[0].summary.totalTime)
      setName(e.routes[0].name)

    });
   
    return instance;
  };

  useEffect(() => {
    dispatch(userAction.userAddress({
      totalDistance: totalDistance,
      totalTime: totalTime,
      name: name
    }))
  }, [totalDistance, totalDistance, name])
  
  const HandleRoutingMachine = createControlComponent(layerComponents);

  //-------------------------------------------------------------------
  return (
    <div className="map">

      <MapContainer center={ResPosition} zoom={13} scrollWheelZoom={false} dragging={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={ResPosition}></Marker>
        <HandleRoutingMachine />
        <LocationMarker getPosition={getPosition} />
      </MapContainer>
      <br />
    <button className="btn btn-primary location_title"><RoomOutlinedIcon/>Choose your current location! click on the map !</button>
    </div>
  );
};
export default Map;
