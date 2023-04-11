import { GridLayerOptions } from 'leaflet';
import { TileLayer } from 'react-leaflet';

const SateliteTileLayer: React.FC<GridLayerOptions> = ({ ...rest }) => {
  return (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      {...rest}
    />
  );
};

export default SateliteTileLayer;
