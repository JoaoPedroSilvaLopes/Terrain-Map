import {
  MapContainer,
  TileLayer
} from 'react-leaflet'
import * as L from 'leaflet';

import {SimpleMapScreenshoter} from 'leaflet-simple-map-screenshoter'

import "./App copy.css";

const App: React.FC = () => {
  const center = [-3.871284, -38.613565] as L.LatLngExpression

  // var map = L.map("leafletMapid", {
  //   center: { lat: -3.871284, lng: -38.613565 },
  //   zoom: 13
  // });
  // map.createPane("snapshot-pane");
  // map.createPane("dont-include");

  // const baseLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
  //   attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
  //   maxZoom: 20,
  //   pane: "snapshot-pane"
  // }).addTo(map)

  // const snapshotOptions = {
  //   hideElementsWithSelectors: [
  //     ".leaflet-control-container",
  //     ".leaflet-dont-include-pane",
  //     "#snapshot-button"
  //   ],
  //   hidden: true
  // };

  // const screenshotter = new SimpleMapScreenshoter(snapshotOptions);
  // screenshotter.addTo(map);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
      attribution='Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS'
      maxZoom={20}
      />
    </MapContainer>
  )
};

export default App;

{/* <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  maxZoom={20}
/> */}
{/* <TileLayer
  url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
  attribution='Tiles &copy; Esri &mdash; Source: Esri'
  maxZoom={20}
/> */}