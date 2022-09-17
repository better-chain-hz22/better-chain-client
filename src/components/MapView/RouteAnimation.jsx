import {useEffect} from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js";
import PropTypes from 'prop-types';

function RouteAnimation({route}) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        const animatedRoute = L.polyline(route, {color: '#f60', weight: 2})
            .addTo(map);
        animatedRoute.snakeIn();
    }, [map]);

    return <></>;
}

RouteAnimation.propTypes = {
    route: PropTypes.array
};

RouteAnimation.defaultProps = {
    route: []
}

export default RouteAnimation;