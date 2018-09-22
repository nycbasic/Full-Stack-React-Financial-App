import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../containers/navbar";
import Main from "./main";
import Edit from "./edit";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    income: 0,
    on: "",
    index: 0,
    modal: "",
    expenseIndex: 0,
    expenses: [
      {
        title: "Fixed Expenses",
        total: 0,
        typeExpenses: [
          {
            name: "Phone Bill",
            balance: 0
          },
          {
            name: "Car Payment",
            balance: 0
          },
          {
            name: "Utilities",
            balance: 0
          },
          {
            name: "Gym Membership",
            balance: 0
          }
        ]
      },
      {
        title: "Variable Expenses",
        total: 0,
        typeExpenses: [
          {
            name: "Credit Card",
            balance: 0
          },
          {
            name: "Laundry",
            balance: 0
          },
          {
            name: "Haircut",
            balance: 0
          }
        ]
      },
      {
        title: "Periodic Expenses",
        total: 0,
        typeExpenses: [
          {
            name: "Entertainment",
            balance: 0
          },
          {
            name: "Dining",
            balance: 0
          },
          {
            name: "Car Insurance",
            balance: 0
          }
        ]
      }
    ]
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleIncomeChange = e => {
    this.setState({
      income: e.target.value
    });
  };

  handleAddClick = (val, index) => {
    this.setState({
      on: val,
      index,
      modal: "new"
    });
  };

  handleDelete = (i, i2) => {
    const { expenses } = this.state;
    const typeExpense = expenses;
    const newExpenses = expenses[i2].typeExpenses.filter((val, index) => {
      return index !== i;
    });

    typeExpense[i2].typeExpenses = newExpenses;
    this.setState({
      expenses: typeExpense
    });
  };

  handleDeleteAll = i => {
    const { expenses } = this.state;
    const typeExpense = expenses;
    typeExpense[i].typeExpenses = [];
    this.setState({
      expenses: typeExpense
    });
  };

  handleEditClick = (index, index2) => {
    this.setState({
      modal: "edit",
      expenseIndex: index,
      index: index2
    });
  };

  handleInputNameChange = e => {
    const { index, expenses } = this.state;
    const i = index;
    let typeExpense = expenses;
    typeExpense[i].typeExpenses.name = e.target.value;
    this.setState({
      expenses: typeExpense
    });
  };

  handleInputBalanceChange = e => {
    const { index, expenses } = this.state;
    const i = index;
    let typeExpense = expenses;
    typeExpense[i].typeExpenses.balance = e.target.value;
    this.setState({
      expenses: typeExpense
    });
  };

  handleSave = () => {
    const { modal, expenseIndex, index } = this.state;
    const typeExpense = this.state.expenses;
    const { typeExpenses } = this.state.expenses[index];

    const obj = {
      name: typeExpenses.name,
      balance: Number(typeExpenses.balance)
    };

    if (modal === "edit") {
      typeExpense[index].typeExpenses[expenseIndex].balance = Number(
        typeExpenses.balance
      );
      this.setState({
        expenses: typeExpense,
        modal: ""
      });
    } else {
      typeExpense[index].typeExpenses = [...typeExpenses, obj];
      this.setState({
        expenses: typeExpense,
        modal: ""
      });
    }
  };

  balanceTotal = i => {
    const typeExpenses = this.state.expenses[i].typeExpenses.map(val => {
      return val.balance;
    });

    if (typeExpenses.length === 0) {
      return [0];
    } else {
      const balances = typeExpenses.reduce((total, num) => {
        return total + num;
      });
      return balances;
    }
  };

  displayExpenses = () => {
    const test = this.state.expenses.map((val, index) => {
      const outerIndex = index;
      return (
        <div key={index} className="col" id={val.title}>
          <div className="card">
            <div className="card-header">
              {val.title}
              <i
                className="fas fa-plus-circle float-right"
                onClick={() => this.handleAddClick(val.title, index)}
                type="button"
                data-toggle="modal"
                data-target="#ExampleModal"
              />
              <i
                className="fas fa-trash-alt float-right"
                onClick={() => this.handleDeleteAll(index)}
              />
              <p id="balance-total">
                Total: <span id="total">${this.balanceTotal(index)}</span>
              </p>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {val.typeExpenses.map((val, index) => (
                  <li key={index} className="list-group-item">
                    <h6 id="expense-name">{val.name}:</h6>
                    <p id="expense-balance">${val.balance}</p>
                    <i
                      onClick={() => this.handleDelete(index, outerIndex)}
                      className="fas fa-minus-circle float-right"
                    />
                    <i
                      className="fas fa-edit float-right"
                      data-toggle="modal"
                      data-target="#ExampleModal"
                      onClick={() => this.handleEditClick(index, outerIndex)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    });
    return test;
  };

  render() {
    const {
      state,
      handleSubmit,
      handleIncomeChange,
      handleAddClick,
      handleDelete,
      handleDeleteAll,
      handleEditClick,
      handleInputNameChange,
      handleInputBalanceChange,
      handleSave,
      balanceTotal,
      displayExpenses
    } = this;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/edit"
              render={() => (
                <div>
                  <Edit
                    {...state}
                    onSubmit={handleSubmit}
                    onIncomeChange={handleIncomeChange}
                    onAddClick={handleAddClick}
                    onDelete={handleDelete}
                    onDeleteAll={handleDeleteAll}
                    onEditClick={handleEditClick}
                    onInputNameChange={handleInputNameChange}
                    onInputBalanceChange={handleInputBalanceChange}
                    onSave={handleSave}
                    onDisplayExpenses={displayExpenses}
                    onBalanceTotal={balanceTotal}
                  />
                </div>
              )}
            />
            <Route exact path="/" render={() => <Main {...this.state} />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    names: state.name
  };
}

export default connect(mapStateToProps)(App);
