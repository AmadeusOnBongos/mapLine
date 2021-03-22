import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import geoData from './data/geo_data.json';

function App() {

  //console.log(geoData);

  var point1 = geoData[10];
  console.log(point1);

  var point2 = geoData[110];
  console.log(point2);

  var line = [
    [point1.gps.latitude, point1.gps.longitude],
    [point2.gps.latitude, point2.gps.longitude]
  ]

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[point1.gps.latitude, point1.gps.longitude]}>
      </Marker>

      <Marker position={[point2.gps.latitude, point2.gps.longitude]}>
      </Marker>

      <Polygon positions = {line}></Polygon>
    </MapContainer>
  );
}

export default App;
