import React from 'react';
import { useNavigate } from 'react-router-dom';
import './risks_list.scss';
import {ClickableTile} from "@carbon/react/lib/components/Tile/Tile";
import {mapSeverityToColor} from "../../meta";
import {Toggle} from "@carbon/react";




const OrderRow = ({data}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/order-page');
    }

    return (
            <ClickableTile
                onClick={() => {handleClick()}}
                className={'risk_row_tile'}
                style={{borderLeftColor: mapSeverityToColor(data.overall_risk)}}
                  key={data.id}>
                <div className={'risk_overall_score'}
                     style={{backgroundColor: mapSeverityToColor(data.overall_risk)}}
                >
                    {data.overall_risk * 100}%
                </div>
                <div className={'risk_row'}>
                    <div className={'risk_row__id'}>
                        {data.id}
                    </div>
                    <div className={'risk_row__src_dst'}>
                        {data.source} {'->'} {data.destination}
                    </div>
                    <div className={'risk_row__risk_types'}>
                        <ul>
                            {data.risk_types.map(r => {
                                return (<li>- {r}</li>)
                            })}
                        </ul>
                    </div>
                </div>

            </ClickableTile>
    )
}

function RisksList({orders, setIsShowPorts, isShowPorts}) {
    return (
        <>
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
            <Toggle
                id={'toggle-ports'}
                labelB={'Hide ports'}
                labelA={'Show ports'}
                toggled={isShowPorts}
                onToggle={() => {
                    setIsShowPorts(!isShowPorts)
                }}

            />
            </div>
            <h4>Orders at-risk</h4>
            {orders.map(o => {
                return <OrderRow data={o} />
            })}
        </>
    );
}

export default RisksList;