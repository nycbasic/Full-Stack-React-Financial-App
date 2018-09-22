import { combineReducers } from "redux";
import monthlyIncome from "./monthly_income";
import newMonthlyIncome from "./new_monthly_income";

const rootReducer = combineReducers({
  monthlyIncome,
  newMonthlyIncome
});

export default rootReducer;
