import React from 'react';
import MapView from "../../components/MapView";
import { useNavigate } from 'react-router-dom';
import OrderPageFunction from "./OrderPageFunctions";
import { TornadoWarning, Error, Coronavirus } from '@carbon/icons-react';
import './order_page.scss';



function OrderPage() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="cds--grid">
            <h1>Order Detail Page</h1>
            <div className="cds--row">
                <div className="cds--col">
                    <MapView isShowPorts={false} />
                </div>
                <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4">
                    <p>Order Number</p>
                    <h2>4654674</h2>
                    <hr />
                    <div className='detail_row'>
                        <p className='detail_row__item'>Sending Port</p>
                        <p className='detail_row__item'>Receiving Port</p>
                    </div>
                    <div className='detail_row'>
                        <h3 className='detail_row__item'>CHSNH</h3>
                        <h3 className='detail_row__item'>ITSPZ</h3>
                    </div>

                     <div className='detail_row'>
                        <p className='detail_row__item'>Date</p>
                        <p className='detail_row__item'>ETA</p>
                    </div>
                    <div className='detail_row'>
                        <h3 className='detail_row__item'>02.12.2020</h3>
                        <h3 className='detail_row__item'>03.06.2021</h3>
                    </div>
                    
                    <hr />
                    
                    <h2>Risks</h2>
                    <div className='detail_row'>
                        <div className='detail_row__item'><TornadoWarning className="warn-icon" size="48"/></div>
                        <h4 className='detail_row__item'>Natural Catastrophy</h4>
                    </div>

                    <div className='detail_row'>
                        <div className='detail_row__item'><Coronavirus className="alert-icon" size="48"/></div>
                        <h4 className='detail_row__item'>Socio-economic risks</h4>
                    </div>

                    <div className='detail_row'>
                        <div className='detail_row__item'><Error className="action-icon" size="48"/></div>
                        <h4 className='detail_row__item'>Interruptions of routes</h4>
                    </div>

                
                    
                    

                    <h2>Impact</h2>
                    <p>🟠 <strong>Delay</strong>: 5 days</p>

                

                <button onClick={() => {handleClick()}}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;