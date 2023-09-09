import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './Map.css';

const MapApp = props => { 
  const {center, zoom} = props;

  // useEffect(() => {
  //   const map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom
  //   });

  //   new window.google.maps.Marker({position: center, map: map});
  // }, [center, zoom]);
  


  return (
    <YMaps>
      <Map defaultState={{ center: [center.lat, center.lng], zoom: zoom }} className={`map ${props.className}`} style={props.style}>
        <Placemark geometry={[center.lat, center.lng]} />
      </Map>
    </YMaps>
  );
};

export default MapApp;