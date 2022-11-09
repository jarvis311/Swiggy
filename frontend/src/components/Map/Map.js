import React from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
const Map = () => {
  const position = [21.192258, 72.787535];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default Map;

// import React, { useEffect, useRef, useState } from 'react'
// import 'ol/ol.css';
// import Feature from 'ol/Feature';
// import Map from 'ol/Map';
// import Polyline from 'ol/format/Polyline';
// import VectorSource from 'ol/source/Vector';
// import View from 'ol/View';
// import OSM from 'ol/source/OSM.js';
// import {Stroke, Style} from 'ol/style';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

// const Maps = () => {
//   const [map, setMap] = useState();
//   const mapElement = useRef();
//   const mapRef = useRef();
//   mapRef.current = map;

//   const coordinates = [
//     [13.38886, 52.517037],
//     [13.397634, 52.529407],
//     [13.428555, 52.523219],
//   ];

//   fetch(
//     'https://router.project-osrm.org/route/v1/driving/' +
//       coordinates.join(';') +
//       '?overview=full&geometries=polyline6'
//   ).then(function (response) {
//     response.json().then(function (result) {
//       const polyline = result.routes[0].geometry;

//       const route = new Polyline({
//         factor: 1e6,
//       }).readGeometry(polyline, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: map.getView().getProjection(),
//       });
//       const routeFeature = new Feature({
//         type: 'route',
//         geometry: route,
//       });

//       const vectorLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [routeFeature],
//         }),
//         style: new Style({
//           stroke: new Stroke({
//             width: 3,
//             color: 'blue',
//           }),
//         }),
//       });

//       map.addLayer(vectorLayer);
//       map.getView().fit(routeFeature.getGeometry());
//     });
//   });

//   useEffect(() => {
//       const initialMap = new Map({
//         target: mapElement.current,
//           layers: [
//               new TileLayer({
//                   source: new OSM(),
//               }),
//           ],
//           view: new View({
//               center: [21.19232591629806, 72.81382154078857],
//               zoom: 2,
//           }),
//       });
//       setMap(initialMap);
//   }, []);

//   return (
//     <div className='map' style={{marginTop: '50px'}}>
//        <div style={{height:'50vh',width:'40%'}} ref={mapElement} className="map-container" />
//     </div>
//   )
// }

// export default Maps
