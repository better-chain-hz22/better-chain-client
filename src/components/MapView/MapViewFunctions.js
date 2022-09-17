import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RouteAnimation from "./RouteAnimation";
import RiskMarker from "./RiskMarker";

const MapViewFunctions = () => {
  const _PortIcon = new L.Icon({
    iconUrl: require("../../images/icons/flag.svg").default,
    iconRetinaUrl: require("../../images/icons/flag.svg").default,
    iconSize: new L.Point(16, 16),
    className: "port_icon",
  });

  const _DestinationPortIcon = new L.Icon({
    iconUrl: require("../../images/icons/flag--filled.svg").default,
    iconRetinaUrl: require("../../images/icons/flag--filled.svg").default,
    iconSize: new L.Point(16, 16),
    className: "delivery_icon",
  });

  const _distributionCenterIcon = new L.Icon({
    iconUrl: require("../../images/icons/location--company--filled.svg")
      .default,
    iconRetinaUrl: require("../../images/icons/location--company--filled.svg")
      .default,
    iconSize: new L.Point(24, 24),
  });

  const renderRoute = (route) => {
    return <RouteAnimation route={route} />;
  };

  const renderPorts = (ports) => {
    return ports.map((o) => {
      return (
        <Marker key={o.id} position={o.position} icon={_PortIcon}>
          <Popup>Port:{o.port_name}</Popup>
        </Marker>
      );
    });
  };

  const renderDistributionCenter = (position) => {
    return <Marker position={position} icon={_distributionCenterIcon} />;
  };

  const renderDestinationPorts = (ports) => {
    return ports.map((o) => {
      return (
        <Marker key={o.id} position={o.position} icon={_DestinationPortIcon}>
          <Popup>{o.port_name}</Popup>
        </Marker>
      );
    });
  };

  const renderSourcePorts = (ports) => {
    return ports.map((o) => {
      return (
        <Marker key={o.id} position={o.position} icon={_PortIcon}>
          <Popup>{o.port_name}</Popup>
        </Marker>
      );
    });
  };

  const renderPortAlerts = (portAlerts, forceManipulation = true) => {
    const parsedData = forceManipulation ? _preparePortsWithRisks(portAlerts) : portAlerts;
    return parsedData.map((p) => {
      return (
        <RiskMarker
          position={p.position}
          alerts={p.alerts || []}
        />
      );
    });
  };

  const _preparePortsWithRisks = (portAlerts) => {
    let ports = {};
    portAlerts.forEach(p => {
      const portId = p.info.code;
      if (!(portId in ports)) {
        ports[portId] = {
          id: portId,
          port_name: p.info.portname,
          position: [
              p.info.latitude, p.info.longitude
          ],
          alerts: [
            {
              type: p.riskType,
              severity: Math.round(Math.random() * 100) / 100,
              duration: {
                startTime: p.start,
                endTime: p.end,
              }
            }
          ]
        };
      } else {
        ports[portId]['alerts'].push(
            {
              type: p.riskType,
              severity: Math.random(),
              duration: {
                startTime: p.start,
                endTime: p.end,
              }
            }
        );
      }
    });
    return Object.values(ports);
  }

  return {
    renderPorts,
    renderDistributionCenter,
    renderDestinationPorts,
    renderSourcePorts,
    renderRoute,
    renderPortAlerts,
  };
};

export default MapViewFunctions();
