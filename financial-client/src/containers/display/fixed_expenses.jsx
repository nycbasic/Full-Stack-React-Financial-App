import React from "react";

const FixedExpenses = props => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">Fixed Expenses</div>
        <div className="card-body">
          <ul className="list-group">
            {props.expenses[0].typeExpenses.map((val, index) => {
              return (
                <li key={index} className="list-group-item">
                  <h6 id="expense-name">{val.name}:</h6>
                  <p id="expense-balance">${val.balance}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FixedExpenses;
