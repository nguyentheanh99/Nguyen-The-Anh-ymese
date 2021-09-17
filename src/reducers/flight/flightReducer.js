import { data } from "../../pages/Trip/data";

//Dữ liệu sẽ được thêm vào store khi chạy website lần đầu tiên thông qua dispatch action

const initialState = {
    data: data,
  }
  
  const flightReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_FLIGHT': {
  
        return {
          ...state
        };
      }
  
      default:
        return state;
    }
  }
  
  export default flightReducer;