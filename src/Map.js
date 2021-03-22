import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import geoData from './data/geo_data.json';
import { Component } from 'react';

class Map extends Component {

  point1 = this.props.point1;
  
  constructor(props) {
    super(props);
    this.state = {
        point1: this.props.data[10],
        point2: this.props.data[110],
        line: [
            [this.point1.gps.latitude, this.point1.gps.longitude],
            [this.point2.gps.latitude, this.point2.gps.longitude]
          ]
    };
  }

  render(){
    return (
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
    
          <Marker position={[this.props.point1.gps.latitude, this.props.point1.gps.longitude]}>
          </Marker>
    
          <Marker position={[this.point2.gps.latitude, this.point2.gps.longitude]}>
          </Marker>
    
          <Polygon positions = {this.line}></Polygon>
        </MapContainer>
      );
  }

  
}

export default Map;
