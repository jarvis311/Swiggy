import React, { useEffect, useRef, useState } from 'react'
import { Map as Maps, View } from 'ol';
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'



const Map = () => {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
      const initialMap = new Maps({
        target: mapElement.current,
          layers: [
              new TileLayer({
                  source: new OSM(),
              }),
          ],
          view: new View({
              center: [21.19232591629806, 72.81382154078857],
              zoom: 2,
          }),
      });
      setMap(initialMap);
  }, []);
  return (
    <div className='map' style={{marginTop: '50px'}}>
       <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container" />
    </div>
  )
}

export default Map