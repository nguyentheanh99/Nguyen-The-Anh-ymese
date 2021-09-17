import flightReducer from "../reducers/flight/flightReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  flight: flightReducer,
});

export default rootReducer;