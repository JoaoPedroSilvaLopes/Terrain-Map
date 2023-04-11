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
      <SateliteTileLayer opacity={0} />
      <ColorTileLayer opacity={1} />
      <GrayScaleTileLayer opacity={0} />
    </MapContainer>
  );
};

export default Map;
