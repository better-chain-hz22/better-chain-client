import React, {useEffect, useState} from 'react';
import {mock_data} from "../../components/MapView/mock";
import MapView from "../../components/MapView";
import RisksList from "../../components/RisksList/RisksList";
import axios from "axios";
import MapViewFunctions from "../../components/MapView/MapViewFunctions";


function Dashboard(props) {
    const [isShowPorts, setIsShowPorts] = useState(false);
    const [riskDataForOrder, setRiskDataForOrder] = useState(null);
    const [fetchRiskDataForOrderError, setFetchRiskDataForOrderError] = useState(null);

    useEffect(() => {
        axios.get("http://34.123.202.156/risks_for_ports")
            .then(response => {
                setRiskDataForOrder(response.data);
            }).catch(err => {
                setFetchRiskDataForOrderError(err);
        });
    }, []);

    if (fetchRiskDataForOrderError) {
        return <p>Network connection error.</p>
    }

    return (
        <div className="cds--grid">
            <div className="cds--row">
                <div className="cds--col">
                    <MapView>
                        {riskDataForOrder && MapViewFunctions.renderPortAlerts(riskDataForOrder)}
                        {isShowPorts && MapViewFunctions.renderDestinationPorts(mock_data.destination_ports)}
                        {isShowPorts && MapViewFunctions.renderSourcePorts(mock_data.source_ports)}
                    </MapView>
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">
                    <RisksList orders={mock_data.orders_at_risk} isShowPorts={isShowPorts}
                               setIsShowPorts={setIsShowPorts}/>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default Dashboard;