import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

type Props = {
  coordenadas: google.maps.LatLngLiteral;
};

const Map: React.FC<Props> = ({ coordenadas }) => {
  const [mapa, setMapa] = useState<google.maps.Map | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLngLiteral[] | null>(
    null
  );

  const apiKey = 'AIzaSyCebNl8fDnbvcZivhxSMpx_DmI2Ldkjo6E';
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const options: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    zoom: 15,
    center: coordenadas,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const handleBounds = () => {
    if (mapa) {
      const bounds = mapa.getBounds();
      const boundNE = bounds?.getNorthEast();
      const boundSW = bounds?.getSouthWest();

      console.log('NE: ', boundNE?.lat(), boundNE?.lng());
      console.log('SW: ', boundSW?.lat(), boundSW?.lng());
    }
  };

  const map = (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      onBoundsChanged={handleBounds}
      onLoad={(value) => setMapa(value)}
    >
      <Marker
        position={{ lat: -3.8363014458977056, lng: -38.586657079162606 }}
      />{' '}
      // NE
      <Marker
        position={{ lat: -3.8363014458977056, lng: -38.64047292083741 }}
      />{' '}
      // NW
      <Marker
        position={{ lat: -3.9062651088075526, lng: -38.64047292083741 }}
      />{' '}
      // SW
      <Marker
        position={{ lat: -3.9062651088075526, lng: -38.586657079162606 }}
      />{' '}
      // SE
    </GoogleMap>
  );

  return isLoaded ? map : <></>;
};

export default Map;
