import React, {useState} from 'react';
import MapView from "../../components/MapView";


function OrderPage() {
    return (
        <div className="cds--grid">
            <h1>Order Detail Page</h1>
            <div className="cds--row">
                <div className="cds--col">
                    <MapView isShowPorts={false} />
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">

                </div>
            </div>
        </div>
    )
}

export default OrderPage;