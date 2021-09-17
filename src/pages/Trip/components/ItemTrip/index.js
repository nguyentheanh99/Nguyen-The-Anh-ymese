import { Col, Row } from 'antd';
import React from 'react';
import info from '../../../../assets/img/infor.png';
import { formatPeriodTime, formatTime } from '../../../../helper/formatTime';
import './style.css';

const ItemTrip = (props) => {
    return (
        <Col span={24}>
            <Row className="flex-1">
                <Col span={4}><img src={props.image} alt="logo" className="img__logo__air" /></Col>
                <Col span={20}>
                    <Row>
                    <Col span={7} className="txt_end">
                        <div className="time__flight">{formatTime(props.item.time_to)}</div>
                        <div className="address__flight">{props.item.address_to}</div>
                    </Col>
                    <Col span={10} className="txt_center">
                        <div className="intend__time">{formatPeriodTime(props.item.time_to, props.item.time_come)}</div>
                        <div className="line"><img src={info}/></div>
                        <div className="way">{props.item.way} chặng</div>
                        <div className="address">SGN</div>
                    </Col>
                    <Col span={7} className="txt_start">
                        <div className="time__flight flex_start">{formatTime(props.item.time_come)}</div>
                        <div className="address__flight flex_start">{props.item.address_come}</div></Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default ItemTrip;
