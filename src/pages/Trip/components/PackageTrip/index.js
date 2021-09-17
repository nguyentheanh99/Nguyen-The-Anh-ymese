import { Button, Col, Row } from 'antd';
import React from 'react'
import ItemTrip from '../ItemTrip';
import { ArrowRightOutlined, SafetyOutlined } from '@ant-design/icons';
import './style.css';
import { formatterInput } from '../../../../helper/formatMoney';

const PackageTrip = (props) => {
  const { data } = props;
  const item = JSON.parse(data.infor_trip);
  return (
  <Row className="mb-10">
    <Col span={16} className="layout_info_flight px-1">
      <Row className="card_info_flight border-5">
        <ItemTrip item={item[0]} image={data.airline_company.img} />
        <ItemTrip item={item[1]} image={data.airline_company.img} />
        <Col span={24}>
          <Row justify="end" className="rate">
            <Col span={12} className="txt_rate">
              <SafetyOutlined className="icon_safe" />
              <span>
                Xếp hạng {data.rate}/5 về các biện pháp an toàn trong đại dịch COVID-19
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={8} className="pl-4">
      <Col span={24} className="choose__option border-5 px-1">
        <div className="txt__option">{data.option} tùy chọn từ</div>  
        <div className="txt__price">{formatterInput(data.price)} đ</div>
        <Button className="btn__choose">Chọn <ArrowRightOutlined /></Button>
      </Col>
    </Col>
  </Row>
    )
}

export default PackageTrip;
