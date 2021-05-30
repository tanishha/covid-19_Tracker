import React, { Component } from "react";
import "./cards.component.css";
import http from "../../util/index";
import Util from "../../util/moment";
import notification from "../../util/notification";
import { CountryComponent } from "../countryComponent/country.component";
export class CardsComponent extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: "",
      recovered: "",
      deaths: "",
      confirmedcountry: "",
      recoveredcountry: "",
      deathscountry: "",
      countryvalue: true,
    };
  }
  componentDidMount() {
    http
      .GET("/api")
      .then((response) => {
        notification.showSuccess("Stay Safe!!");
        this.setState({
          confirmed: response.data.confirmed.value,
          deaths: response.data.deaths.value,
          recovered: response.data.recovered.value,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  countrydata = (cntry) => {
    http
      .GET("/api/countries/" + cntry)
      .then((response) => {
        notification.showSuccess("Update of "+ cntry.toUpperCase()+"!!");
        this.setState({
          confirmedcountry: response.data.confirmed.value,
          deathscountry: response.data.deaths.value,
          recoveredcountry: response.data.recovered.value,
          countryvalue: false,
        });
      })
      .catch((err) => {
        notification.showWarnings("Please Type Correctly!");

        console.log(err);
      });
    console.log("darta becomes,", this.state.confirmedcountry);
  };

  render() {
    let c = this.state.countryvalue
      ? this.state.confirmed
      : this.state.confirmedcountry;
    let r = this.state.countryvalue
      ? this.state.recovered
      : this.state.recoveredcountry;
    let d = this.state.countryvalue
      ? this.state.deaths
      : this.state.deathscountry;
    return (
      <div>
        <CountryComponent
          title="Global"
          submitCallback={this.countrydata}
        ></CountryComponent>
        <div className="main-container">
          <div className="main-card-container k">
            <div className="top-number-container">
              <p>INFECTED</p>
            </div>

            <div className="main-area-k">
              <h1>{c}</h1>
            </div>

            <div className="bottom-number-container">
              <p>{Util.formatDate()}</p>
            </div>
          </div>
          <div className="main-card-container q">
            <div className="top-number-container">
              <p>RECOVERED</p>
            </div>

            <div className="main-area-q">
              <h1>{r}</h1>
            </div>

            <div className="bottom-number-container">
              <p>{Util.formatDate()}</p>
            </div>
          </div>
          <div className="main-card-container j">
            <div className="top-number-container">
              <p>DEATHS</p>
            </div>

            <div className="main-area-j">
              <h1>{d}</h1>
            </div>

            <div className="bottom-number-container">
              <p>{Util.formatDate()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
