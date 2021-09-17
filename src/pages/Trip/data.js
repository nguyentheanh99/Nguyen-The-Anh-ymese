
// dữ liệu api trả về
export const data = [
    { 
        id: 1,
        infor_trip: `[{
          "time_to": "2021-10-01T07:00:00",
          "time_come": "2021-10-01T10:00:00",
          "address_to": "SN",
          "address_come": "DN",
          "way": 1
        },{
          "time_to": "2021-10-10T13:00:00",
          "time_come": "2021-10-10T16:00:00",
          "address_to": "DN",
          "address_come": "SG",
          "way": 1
        }]`,
        price: 1500000,
        option: 1,
        rate: 4,
        airline_company: {
            id: 1,
            name: 'Vietname Airline',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }, { 
        id: 2,
        infor_trip: `[{
          "time_to": "2021-10-02T10:00:00",
          "time_come": "2021-10-02T14:00:00",
          "address_to": "HN",
          "address_come": "SIN",
          "way": 2
        },{
          "time_to": "2021-10-10T08:00:00",
          "time_come": "2021-10-10T12:00:00",
          "address_to": "SIN",
          "address_come": "HN",
          "way": 2
        }]`,
        price: 4500000,
        option: 2,
        rate: 3.5,
        airline_company: {
            id: 1,
            name: 'Vietname Airline DN',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }, { 
        id: 3,
        infor_trip: `[{
          "time_to": "2021-10-01T01:00:00",
          "time_come": "2021-10-01T03:00:00",
          "address_to": "SN",
          "address_come": "HUE",
          "way": 1
        },{
          "time_to": "2021-10-10T08:00:00",
          "time_come": "2021-10-10T10:00:00",
          "address_to": "HUE",
          "address_come": "SN",
          "way": 1
        }]`,
        price: 1500000,
        option: 2,
        rate: 5,
        airline_company: {
            id: 1,
            name: 'Vietname Airline DN',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }, { 
        id: 4,
        infor_trip: `[{
          "time_to": "2021-10-01T04:00:00",
          "time_come": "2021-10-01T10:00:00",
          "address_to": "SN",
          "address_come": "USA",
          "way": 1
        },{
          "time_to": "2021-10-10T10:00:00",
          "time_come": "2021-10-10T18:00:00",
          "address_to": "USA",
          "address_come": "HN",
          "way": 1
        }]`,
        price: 5000000,
        option: 2,
        rate: 4,
        airline_company: {
            id: 1,
            name: 'Vietname Airline DN',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }, { 
        id: 5,
        infor_trip: `[{
          "time_to": "2021-10-01T05:00:00",
          "time_come": "2021-10-01T10:00:00",
          "address_to": "DN",
          "address_come": "AUS",
          "way": 3
        },{
          "time_to": "2021-10-10T12:00:00",
          "time_come": "2021-10-10T17:00:00",
          "address_to": "AUS",
          "address_come": "DN",
          "way": 3
        }]`,
        price: 6500000,
        option: 1,
        rate: 5,
        airline_company: {
            id: 1,
            name: 'Vietname Airline DN',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }, { 
        id: 6,
        infor_trip: `[{
          "time_to": "2021-10-01T04:00:00",
          "time_come": "2021-10-01T06:00:00",
          "address_to": "SG",
          "address_come": "DN",
          "way": 1
        },{
          "time_to": "2021-10-10T10:00:00",
          "time_come": "2021-10-10T12:00:00",
          "address_to": "DN",
          "address_come": "SG",
          "way": 1
        }]`,
        price: 1000000,
        option: 2,
        rate: 4,
        airline_company: {
            id: 1,
            name: 'Vietname Airline DN',
            img: 'https://firebasestorage.googleapis.com/v0/b/flight-91f11.appspot.com/o/logo.png?alt=media&token=babd74a8-e36a-4b22-983a-8523cd8b4ffd',
            address: 'DN, Vietname',
            coordinator: 'Vietname airline'
        }
    }
];

export const dataTypes = [
  { name: 'Tốt nhất', key: 'best', price: 3000000, time: '10g 10phut', checked: true },
  { name: 'Rẻ nhất', key: 'cheapest', price: 2000000, time: '10g 10phut', checked: false },
  { name: 'Nhanh nhất', key: 'fastest', price: 12500000, time: '10g 10phut', checked: false }
]