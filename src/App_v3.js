import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import geoData from './data/geo_data.json';
import React, { Component } from 'react';

class App extends Component {

    //console.log(geoData);
    constructor(props) {
        super(props);

        this.state = {
            point1: geoData[10],
            point2: geoData[100],
            line: [
                [geoData[10].gps.latitude, geoData[10].gps.longitude],
                [geoData[100].gps.latitude, geoData[100].gps.longitude]
            ]
        };
    }

    render() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[this.state.point1.gps.latitude, this.state.point1.gps.longitude]}>
                    <Popup>
                        {this.state.point1.name}
                    </Popup>
                </Marker>

                <Marker position={[this.state.point2.gps.latitude, this.state.point2.gps.longitude]}>
                    <Popup>
                        {this.state.point2.name}
                    </Popup>
                </Marker>

                <Polygon positions={this.state.line}></Polygon>
            </MapContainer>
        );
    }


}

export default App;
