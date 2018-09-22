import React, { Component } from "react";
import { connect } from "react-redux";

class MonthlyIncome extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>
            Your Monthy Income Total: $
            {this.props.newIncome > 0
              ? this.props.newIncome
              : this.props.income.map(val => val.income)}
          </h5>
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
