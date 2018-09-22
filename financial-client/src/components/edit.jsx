import React, { Component } from "react";
import Modal from "./modal";

class Edit extends Component {
  render() {
    const { onSubmit, income, onIncomeChange, onDisplayExpenses } = this.props;
    return (
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="monthlyIncome">
              <h5>Monthly Income</h5>
            </label>
            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
            <div className="input-group" id="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="input-income"
                value={income}
                onChange={onIncomeChange}
              />
            </div>
          </div>
          <div className="row">{onDisplayExpenses()}</div>
        </form>
        <Modal {...this.props} />
      </div>
    );
  }
}

export default Edit;
