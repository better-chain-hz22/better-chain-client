import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './map_view.scss';
import dataPoints from './points.json';
import {mock_data} from "./mock";
import MapViewFunctions from "./MapViewFunctions";

function MapView() {
    return (
            <MapContainer center={dataPoints.distributionCenter}
                          zoom={3}
                          scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {MapViewFunctions.renderDestinationPorts(mock_data.destination_ports)}
                {MapViewFunctions.renderSourcePorts(mock_data.source_ports)}
                {MapViewFunctions.renderPortAlerts(mock_data.recent_alerts)}
            </MapContainer>

    );
}

export default MapView;