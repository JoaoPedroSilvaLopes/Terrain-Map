import { MapContainer } from 'react-leaflet';
import {
  ColorTileLayer,
  GrayScaleTileLayer,
  SateliteTileLayer,
} from '@procedural-render/components';
import * as L from 'leaflet';

const Map: React.FC = () => {
  const center = [-3.871284, -38.613565] as L.LatLngExpression;

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true} maxZoom={20}>
      <SateliteTileLayer opacity={1} />
      <ColorTileLayer opacity={0} />
      <GrayScaleTileLayer opacity={0} />
    </MapContainer>
  );
};

export default Map;
