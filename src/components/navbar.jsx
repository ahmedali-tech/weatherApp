import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  state = {};

  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://www.downloadclipart.net/large/50367-sunny-partly-cloudy-weather-clipart.png"
                alt=""
                width="40"
                height="34"
                class="d-inline-block align-text-top"
              />
              <h3 className="navheading m-2">Weather App</h3>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
