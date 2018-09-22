import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Financial Management: React/Redux with Auth and API Project
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link disabled" href="">
              Login <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/edit">
              Edit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  null
)(Navbar);
