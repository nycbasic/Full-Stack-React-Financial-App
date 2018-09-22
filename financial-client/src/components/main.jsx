import React from "react";
import MonthlyIncome from "../containers/display/monthly_income";
import FixedExpenses from "../containers/display/fixed_expenses";
import VariableExpenses from "../containers/display/variable_expenses";
import PeriodicExpenses from "../containers/display/periodic_expenses";
import Balance from "../containers/display/balance";

const Main = props => {
  return (
    <div className="container">
      <MonthlyIncome {...props} />
      <div className="row">
        <FixedExpenses {...props} />
        <VariableExpenses {...props} />
        <PeriodicExpenses {...props} />
      </div>
      <Balance />
    </div>
  );
};

export default Main;
