import { Col } from 'antd';
import React from 'react';
import { formatterInput } from '../../../../helper/formatMoney';
import './style.css';

function ChooseOption(props) {
    const className = props.value.checked ? 'card__option_choose border-5' : 'card__option border-5';
    return (
        <Col span={8} className="px-1">
            <div className={className}>
            <div className="title__option">{props.value.name}</div>
            <div className="txt__price">{formatterInput(props.value.price)} đ</div>
            <div className="time__option">{props.value.time} (trung bình)</div>
            </div>
        </Col>
    )
}

export default ChooseOption;
