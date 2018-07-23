import React, { Component } from "react";

// https://ctrlq.org/google/photos/

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/_PGGKfbc32Y9vLJXw9obaoEMo8Sn3GJhOHOlwNBt_AFu2_TTWNIeNwT9dWo=w2400"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Right
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
