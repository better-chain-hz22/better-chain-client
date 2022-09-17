import React from 'react';
import MapView from "../components/MapView";

function Dashboard(props) {
    return (
        <div className="cds--grid">
            <div className="cds--row">
                <div className="cds--col">
                    <MapView />
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">

                </div>
            </div>
        </div>
    );
}

export default Dashboard;