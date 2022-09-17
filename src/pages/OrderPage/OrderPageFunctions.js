import { Marker } from "react-leaflet";
import L from "leaflet";

const OrderPageFunctions = () => {
  const _NatDisIcon = new L.Icon({
    iconUrl: require("../../images/icons/tornado-warning.svg").default,
    iconRetinaUrl: require("../../images/icons/tornado-warning.svg").default,
    iconSize: new L.Point(16, 16),
    className: "natdis_icon",
  });

  const renderSourcePorts = (ports) => {};
};

export default OrderPageFunctions();
