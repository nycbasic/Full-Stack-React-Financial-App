import { combineReducers } from "redux";
import names from "./reducer_test";

const rootReducer = combineReducers({
  name: names
});

export default rootReducer;
