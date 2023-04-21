import { GridLayerOptions } from 'leaflet';
import { TileLayer } from 'react-leaflet';

const ColorTileLayer: React.FC<GridLayerOptions> = ({ ...rest }) => {
  return (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}"
      //attribution="Tiles &copy; Esri &mdash; Source: Esri"
      {...rest}
    />
  );
};

export default ColorTileLayer;
