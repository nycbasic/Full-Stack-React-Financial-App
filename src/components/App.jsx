import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.names.map(val => {
          return <p>{val.name}</p>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    names: state.name
  };
}

export default connect(mapStateToProps)(App);
