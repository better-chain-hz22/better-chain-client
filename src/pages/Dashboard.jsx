import React, {useState} from 'react';
import {mock_data} from "../components/MapView/mock";
import MapView from "../components/MapView";
import RisksList from "../components/RisksList/RisksList";

function Dashboard(props) {
    const [isShowPorts, setIsShowPorts] = useState(false);
    return (
        <div className="cds--grid">
            <div className="cds--row">
                <div className="cds--col">
                    <MapView isShowPorts={isShowPorts} />
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">
                    <RisksList orders={mock_data.orders_at_risk} isShowPorts={isShowPorts} setIsShowPorts={setIsShowPorts} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;