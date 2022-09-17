import React, {useEffect, useState} from 'react';
import axios from "axios";
import MapView from "../../components/MapView";
import {useHistory, useParams} from 'react-router-dom';
import {TornadoWarning, Error, Coronavirus} from '@carbon/icons-react';
import './order_page.scss';
import {Loading} from "@carbon/react";
import MapViewFunctions from "../../components/MapView/MapViewFunctions";
import {mock_data} from "../../components/MapView/mock";


function OrderPage() {
    const {orderId} = useParams();
    let history = useHistory();
    const [orderData, setOrderData] = useState(null);
    const [errorFetchOrderData, setErrorFetchOrderData] = useState(false);

    useEffect(() => {
        axios.get(`http://34.123.202.156/risks_for_order?order_id=${orderId}`)
            .then(response => {
                setOrderData(response.data);
            }).catch(err => {
            setErrorFetchOrderData(err);
        });

    }, [])
    const handleClick = () => {
        history.push('/');
    }

    if (!orderData) return (
        <Loading/>
    );

    const firstOrder = orderData.order_info.length > 0 ? orderData.order_info[0] : null;
    const allRisks = new Set();

    Object.values(orderData.ship_risks).forEach(o => {
        (o.risks || []).forEach(r => {
            allRisks.add(r.riskType);
        })
    })

    return firstOrder && (
        <div className="cds--grid">
            <h2>Order Detail Page</h2>
            <div className="cds--row">
                <div className="cds--col">
                    <MapView>
                        {MapViewFunctions.renderRoute(mock_data.sample_route)}
                        {MapViewFunctions.renderPortAlerts(mock_data.mock_routes["0040090962"], false)}
                    </MapView>
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">
                    <p>Order Number</p>
                    <h2>{orderId}</h2>
                    <hr/>
                    <div className='detail_row'>
                        <p className='detail_row__item'>Sending Port</p>
                        <p className='detail_row__item'>Receiving Port</p>
                    </div>
                    <div className='detail_row'>
                        <h3 className='detail_row__item'>{firstOrder.pol_name}</h3>
                        <h3 className='detail_row__item'>{firstOrder.pod_name}</h3>
                    </div>

                    <div className='detail_row'>
                        <p className='detail_row__item'>Loading date</p>
                        <p className='detail_row__item'>ETA</p>
                    </div>
                    <div className='detail_row'>
                        <h5 className='detail_row__item'>{firstOrder.datum_abgang}</h5>
                        <h5 className='detail_row__item'>{firstOrder.datum_ankunft}</h5>
                    </div>

                    <hr/>

                    <h2>Risks</h2>

                    {
                        allRisks && (
                            Array.from(allRisks).map(r => {
                                return (
                                    <div className='detail_row'>
                                    <div className='detail_row__item'>
                                        <Error className="warn-icon" size="48"/></div>
                                    <h4 className='detail_row__item'>
                                        {`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()}`}
                                    </h4>
                                </div>)
                            })
                        )
                    }


                    <hr/>

                    <h2>Impact</h2>
                    <p>🟠 <strong>Delay</strong>: 5 days</p>
                    <hr/>

                    <button onClick={() => {
                        handleClick()
                    }}>Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;