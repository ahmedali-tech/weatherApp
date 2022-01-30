import React, { Component } from "react";
import "./jumbotron.css";
import snow from "./images/snow.jpg";
import rainy from "./images/rainy.jpg";
import cloudy from "./images/cloudy.jpg";
import sunny from "./images/sunny.jpg";

class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {
      main: null,
      description: null,
      temp: null,
      pressure: null,
      humidity: null,
      now: null,
      hour1: null,
      hour2: null,
      hour3: null,
      hour4: null,
      hour5: null,
      nowtemp: null,
      hour1temp: null,
      hour2temp: null,
      hour3temp: null,
      hour4temp: null,
      hour5temp: null,
      tomtemp: null,
      dattemp: null,
    };
  }
  componentDidMount() {
    let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
    let lat = "lat=31.229676&";
    let lon = "lon=74.012229&";
    let apiOptions = "units=metric&exclude=minutely,alerts&";
    let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
    let file = queryUrl + lat + lon + apiOptions + apiKey;
    fetch(file)
      .then((response) =>
        response.json().then((data) =>
          this.setState({
            main: data.current.weather[0].main,
            description: data.current.weather[0].description,
            temp: data.current.temp,
            pressure: data.current.pressure,
            humidity: data.current.humidity,
            nowtemp: data.hourly[0].temp,
            hour1temp: data.hourly[1].temp,
            hour2temp: data.hourly[2].temp,
            hour3temp: data.hourly[3].temp,
            hour4temp: data.hourly[4].temp,
            hour5temp: data.hourly[5].temp,
            now: new Date().getHours(),
            hour1: new Date().getHours() + 1,
            hour2: new Date().getHours() + 2,
            hour3: new Date().getHours() + 3,
            hour4: new Date().getHours() + 4,
            hour5: new Date().getHours() + 5,
            tomtemp: data.daily[0].temp.day,
            dattemp: data.daily[1].temp.day,
          })
        )
      )

      // Weather main data
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <div
          style={{
            height: window.innerHeight - 10,
            backgroundImage: `url(${rainy})`,
          }}
          classNameName="jumbo-container"
          height={window.innerHeight + 110}
        >
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-7 col-xl-5">
                <div
                  id="wrapper-bg"
                  className="card text-white bg-image shadow-4-strong"
                  style={{ backgroundImage: `url(${rainy})` }}
                >
                  <div className="card-header p-4 border-0">
                    <div className="text-center mb-3">
                      <p className="h2 mb-1" id="wrapper-name">
                        Lahore
                      </p>
                      <p className="mb-1" id="wrapper-description">
                        {this.state.description}
                      </p>
                      <p className="display-1 mb-1" id="wrapper-temp">
                        {this.state.temp + "°C"}
                      </p>
                      <span className="">
                        Pressure:{" "}
                        <span id="wrapper-pressure">{this.state.pressure}</span>
                      </span>
                      <span className="mx-2">|</span>
                      <span className="">
                        Humidity:{" "}
                        <span id="wrapper-humidity">{this.state.humidity}</span>
                      </span>
                    </div>
                  </div>

                  <div className="card-body p-4 border-top border-bottom mb-2">
                    <div className="row text-center">
                      <div className="col-2">
                        <strong className="d-block mb-2">Now</strong>
                        <img
                          id="wrapper-icon-hour-now"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour-now">
                          {this.state.nowtemp}
                        </strong>
                      </div>

                      <div className="col-2">
                        <strong className="d-block mb-2" id="wrapper-time1">
                          {this.state.hour1}
                        </strong>
                        <img
                          id="wrapper-icon-hour1"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour1">
                          {this.state.hour1temp}
                        </strong>
                      </div>

                      <div className="col-2">
                        <strong className="d-block mb-2" id="wrapper-time2">
                          {this.state.hour2}
                        </strong>
                        <img
                          id="wrapper-icon-hour2"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour2">
                          {this.state.hour2temp}
                        </strong>
                      </div>

                      <div className="col-2">
                        <strong className="d-block mb-2" id="wrapper-time3">
                          {this.state.hour3}
                        </strong>
                        <img
                          id="wrapper-icon-hour3"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour3">
                          {this.state.hour3temp}
                        </strong>
                      </div>

                      <div className="col-2">
                        <strong className="d-block mb-2" id="wrapper-time4">
                          {this.state.hour4}
                        </strong>
                        <img
                          id="wrapper-icon-hour4"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour4">
                          {this.state.hour4temp}
                        </strong>
                      </div>

                      <div className="col-2">
                        <strong className="d-block mb-2" id="wrapper-time5">
                          {this.state.hour5}
                        </strong>
                        <img
                          id="wrapper-icon-hour5"
                          src=""
                          className=""
                          alt=""
                        />
                        <strong className="d-block" id="wrapper-hour5">
                          {this.state.hour5temp}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="card-body px-5">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <strong>Today</strong>
                      </div>

                      <div className="col-lg-2 text-center">
                        <img
                          id="wrapper-icon-today"
                          src=""
                          className="w-100"
                          alt=""
                        />
                      </div>

                      <div className="col-lg-4 text-end">
                        <span id="wrapper-forecast-temp-today">
                          {this.state.nowtemp}
                        </span>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <strong>Tomorrow</strong>
                      </div>

                      <div className="col-lg-2 text-center">
                        <img
                          id="wrapper-icon-tomorrow"
                          src=""
                          className="w-100"
                          alt=""
                        />
                      </div>

                      <div className="col-lg-4 text-end">
                        <span id="wrapper-forecast-temp-tomorrow">
                          {this.state.tomtemp}
                        </span>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <strong>Day after tomorrow</strong>
                      </div>

                      <div className="col-lg-2 text-center">
                        <img
                          id="wrapper-icon-dAT"
                          src=""
                          className="w-100"
                          alt=""
                        />
                      </div>

                      <div className="col-lg-4 text-end">
                        <span id="wrapper-forecast-temp-dAT">
                          {this.state.dattemp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Jumbotron;
