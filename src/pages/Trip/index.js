import React, { useState } from 'react';
import { Col, Row } from 'antd';
import './style.css';
import ChooseOption from './components/ChooseOption';
import { useSelector } from 'react-redux';
import Filter from './components/Filter';
import PackageTrip from './components/PackageTrip';
import { dataTypes } from './data';
import { periodTime } from '../../helper/formatTime';

// Nếu viết api thì chỉ cần truyền params value của filter (truyền mặc limit page=1) khi dispatch thì BE sẽ xử lý trả về dữ liệu

function Trip() {
  const flight = useSelector(state => state.flight.data);
  const flightSort = flight.sort((a,b) => a.rate < b.rate && 1 || -1);
  const [flightLists, setFlightLists] = useState(flightSort);
  const [options, setTypes] = useState(dataTypes);

  const filterFlight = (value) => {
    if(value === 'best') {
      flightLists.sort((a,b) => a.rate < b.rate && 1 || -1);
    }
    if(value === 'cheapest') {
      flightLists.sort((a,b) => a.price > b.price && 1 || -1);
    }
    if(value === 'fastest') {
      flightLists.sort((a,b) => {
        const before = Math.min.apply(Math, JSON.parse(a.infor_trip).map(function(o) { return periodTime(o.time_to, o.time_come) }));
        const after = Math.min.apply(Math, JSON.parse(b.infor_trip).map(function(o) { return periodTime(o.time_to, o.time_come) }));
        return before > after && 1 || -1
      });
    }
    setFlightLists([...flightLists]);
  }

  const changeOption = (value) => {
    filterFlight(value);
    if (value === 'go' || value === 'comeback') {
      return;
    }
    options.map((option) => {
      if(option.checked === true) return option.checked=false;
    })
    const index = options.findIndex((option => option.key === value));
    options[index].checked = true;
    setTypes([...options])
  }

  return (
    <div className="flight__container">
      <Row>
        <Filter change={changeOption} />
        <Col span={24} className="mt-10">
          <Row className="layout__option">
            {options.map((option, index) => (
              <ChooseOption key={index} value={option} />
            ))}
          </Row>
        </Col>
        <Col span={24}>
          {flightLists.map((item, index) => (
            <PackageTrip key={index} data={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Trip;


