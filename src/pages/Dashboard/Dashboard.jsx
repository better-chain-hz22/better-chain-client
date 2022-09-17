import React, {useState} from 'react';
import {mock_data} from "../../components/MapView/mock";
import MapView from "../../components/MapView";
import RisksList from "../../components/RisksList/RisksList";


function Dashboard(props) {
    const [isShowPorts, setIsShowPorts] = useState(false);
    const  [data, setData] = useState({});
    const  [error, setError] = useState(null);

    fetch("http://10.101.114.132:5000/risks_for_order?order_id=0040090247")
    .then(result => result.json())
    .then((jsonResult) => {
        setData(jsonResult);
    },
    (error) => {
        setError(error);
    })

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
            <p></p>
        </div>
    );
}

export default Dashboard;