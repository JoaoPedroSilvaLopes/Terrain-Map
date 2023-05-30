import { GoogleMap, useJsApiLoader, GoogleMapProps } from '@react-google-maps/api';

type Props = {
  coordenadas: google.maps.LatLngLiteral;
  generate: boolean;
  setBounds: React.Dispatch<React.SetStateAction<google.maps.LatLng[] | undefined>>
} & GoogleMapProps;

const Map: React.FC<Props> = ({ coordenadas, generate, setBounds, ...rest }) => {
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

  const map = (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      {...rest}
    />
  );

  return isLoaded ? map : <></>;
};

export default Map;
