import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import geoData from './data/geo_data.json';
import { Component } from 'react';

class Map extends Component {

  

  render(){
    return (
        <h1>Hello {this.props.point1.name}</h1>
      );
  }

  
}

export default Map;
