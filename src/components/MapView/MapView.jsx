import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {MapContainer, TileLayer} from "react-leaflet";
import './map_view.scss';
import dataPoints from './points.json';
import {mock_data} from "./mock";
import MapViewFunctions from "./MapViewFunctions";

function MapView({isShowPorts}) {
    const navigate = useNavigate();
    const navToOrder = () => {
        navigate('/order-number');
    }

    return (
            <MapContainer center={dataPoints.distributionCenter}
                          zoom={3}
                          scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    onClick={navToOrder}
                />
                {isShowPorts && MapViewFunctions.renderDestinationPorts(mock_data.destination_ports)}
                {isShowPorts && MapViewFunctions.renderSourcePorts(mock_data.source_ports)}
                {MapViewFunctions.renderPortAlerts(mock_data.mock_routes["0040090962"])}
                {/*{MapViewFunctions.renderRoute(mock_data.sample_route)}*/}
            </MapContainer>

    );
}

export default MapView;