import {useEffect} from 'react';
import {useMap} from "react-leaflet";
import L from "leaflet";
import {mapSeverityToColor} from "../../meta";

const riskInfoPopup = (alerts) => {
    let html = '';
    html += '<ul>';
    alerts.forEach(o => {
        html += `<li>Type: ${o.type} <br />Score: ${o.severity} <br /> Start: ${o.duration.startTime} <br /> End: ${o.duration.endTime}</li>`;
    })
    html += '</ul>';
    return html;
}

const getMaxSeverity = (alerts) => {
    let max = 0;
    alerts.forEach(o => {
        max = Math.max(o.severity, max);
    })
    return max;
}


function RiskMarker({position, alerts}) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const markerCircle = L.circleMarker(position, {
            radius: 15,
            color: alerts.length > 0 ? mapSeverityToColor(getMaxSeverity(alerts)) : '#198038'
        });

        const label = L.marker(position, {
            icon: L.divIcon({
                className: '',
                html: alerts.length,
                iconSize: new L.Point(16, 16),
                iconAnchor: new L.Point(4, 8),

            })
        });
        label.addTo(map);
        markerCircle.addTo(map);

        const alertsDOM = riskInfoPopup(alerts);
        markerCircle.bindPopup(
            alertsDOM
        )

    }, [map]);

    return (
        <></>
    );
}

export default RiskMarker;