import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './map_view.scss';
import dataPoints from './points.json';
import {mock_data} from "./mock";
import MapViewFunctions from "./MapViewFunctions";

function MapView({isShowPorts}) {
    const [riskData, setRiskData] = useState([]);
    const [dataFetchError, setDataFetchError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        fetch("http://34.123.202.156/risks_for_ports")
        .then((result) => result.json())
        .then(
        (jsonResult) => {
          setRiskData(jsonResult);
          setIsLoaded(true);
        },
        (error) => {
          setDataFetchError(error);
          setIsLoaded(true);
        },
      );
    }, [])

    
    return (
            <MapContainer center={dataPoints.distributionCenter}
                          zoom={3}
                          scrollWheelZoom={true}>
                
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/*{isShowPorts && MapViewFunctions.renderDestinationPorts(mock_data.destination_ports)}*/}
                {/*{isShowPorts && MapViewFunctions.renderSourcePorts(mock_data.source_ports)}*/}
                {!dataFetchError && MapViewFunctions.renderPortAlerts(riskData)}
                {MapViewFunctions.renderPortAlerts(mock_data.mock_routes["0040090962"])}
                {/*{MapViewFunctions.renderRoute(mock_data.sample_route)}*/}
            </MapContainer>

    );
}

export default MapView;