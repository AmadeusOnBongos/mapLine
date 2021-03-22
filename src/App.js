import './App.css';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Map from './TestMap';
import App_v2 from './App_v2';
import geoData from './data/geo_data.json';

function App() {
  return (
    <Map point1 = {geoData[10]} point2 = {geoData[110]} />
  );
}

export default App;
