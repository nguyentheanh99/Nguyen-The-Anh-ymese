import { Col, Input, Row, Select } from 'antd';
import React from 'react';
import { dataFilter } from './data';
import './style.css';
import { data } from '../../data';

const { Option } = Select;

function Filter(props) {
  return (
    <Col span={24}>
      <Row justify="space-between" align="middle">
        <Col className="font-weight-600">{data.length} kết quả</Col>
        <Row align="middle" className="w-300">
          <Col span={12} className="font-weight-600 txt_end pr-5">Phân loại theo</Col>
          <Col span={12}>
            <Input.Group compact>
              <Select className="ip__option" defaultValue="best" onChange={(value) => props.change(value) }>
                {dataFilter.map((item, index) =>(
                  <Option key={index} value={item.key}>{item.name}</Option>
                ))}
              </Select>
            </Input.Group></Col>
        </Row>
      </Row>
    </Col>
  )
}

export default Filter;
