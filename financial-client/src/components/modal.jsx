import React, { Component } from "react";

class Modal extends Component {
  render() {
    const {
      onInputNameChange,
      onInputBalanceChange,
      onSave,
      on,
      modal,
      expenses,
      index,
      expenseIndex
    } = this.props;
    return (
      <div
        className="modal fade"
        id="ExampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modal === "edit"
                  ? expenses[index].typeExpenses[expenseIndex].name
                  : on}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {modal === "new" ? (
                  <React.Fragment>
                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="col-htmlForm-label"
                      >
                        Name of Expense:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={onInputNameChange}
                        ref="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Balance:
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="message-text"
                          onChange={onInputBalanceChange}
                          ref="balance"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Balance:
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="message-text"
                        onChange={onInputBalanceChange}
                        ref="balance"
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => {
                  const { name, balance } = this.refs;
                  if (modal === "new") {
                    balance.value = "";
                    name.value = "";
                  } else {
                    balance.value = "";
                  }
                }}
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const { name, balance } = this.refs;
                  if (modal === "new") {
                    balance.value = "";
                    name.value = "";
                    onSave();
                  } else {
                    balance.value = "";
                    onSave();
                  }
                }}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
