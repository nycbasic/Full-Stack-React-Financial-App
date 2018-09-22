import React, { Component } from "react";
import { connect } from "react-redux";

class MonthlyIncome extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="pull-right">Total Balance: $ 1000</h5>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    income: state.monthlyIncome,
    newIncome: state.newMonthlyIncome
  };
}

export default connect(
  mapStateToProps,
  null
)(MonthlyIncome);
