import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './map_view.scss';
import dataPoints from './points.json';

function MapView(props) {
    return (
            <MapContainer center={dataPoints.distributionCenter}
                          zoom={3}
                          scrollWheelZoom={true}>
                
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.children}
            </MapContainer>

    );
}

export default MapView;