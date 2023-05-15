import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type Props = {
  coordenadas: google.maps.LatLngLiteral
}

const Map: React.FC<Props> = ({coordenadas}) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const options: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    zoom: 15,
    center: coordenadas,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCebNl8fDnbvcZivhxSMpx_DmI2Ldkjo6E',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
    />
  ) : (
    <></>
  );
};

export default Map;
