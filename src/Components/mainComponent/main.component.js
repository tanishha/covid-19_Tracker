import React, { Component } from "react";
import http from "../../util/index";
import notification from "../../util/notification";
import { CountryComponent } from "../countryComponent/country.component";
import { CardsComponent } from "../cardsComponent/cards.component";
import { ChartsComponent } from "../chartsComponent/charts.component";
export class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: "",
      recovered: "",
      deaths: "",
      confirmedcountry: "",
      recoveredcountry: "",
      deathscountry: "",
      confirmedDetail: [],
      detail: [],
      countryvalue: false,
      country: "",
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

    http
      .GET("/api/daily")
      .then((response) => {
        this.setState({
          detail: response.data,
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
        notification.showSuccess("Update of " + cntry.toUpperCase() + "!!");
        this.setState({
          confirmedcountry: response.data.confirmed.value,
          deathscountry: response.data.deaths.value,
          recoveredcountry: response.data.recovered.value,
          countryvalue: true,
          country: cntry,
        });
      })
      .catch((err) => {
        notification.showWarnings("Please Type Correctly!");
        console.log(err);
      });
  };

  render() {
    let c = this.state.countryvalue
      ? this.state.confirmedcountry
      : this.state.confirmed;
    let r = this.state.countryvalue
      ? this.state.recoveredcountry
      : this.state.recovered;
    let d = this.state.countryvalue
      ? this.state.deathscountry
      : this.state.deaths;

    return (
      <div>
        <CountryComponent
          title="Global"
          submitCallback={this.countrydata}
        ></CountryComponent>
        <CardsComponent rvalue={r} cvalue={c} dvalue={d}></CardsComponent>
        <ChartsComponent
          detail={this.state.detail}
          rvalue={this.state.recoveredcountry}
          cvalue={this.state.confirmedcountry}
          dvalue={this.state.deathscountry}
          countryvalue={this.state.countryvalue}
          country={this.state.country}
        ></ChartsComponent>
      </div>
    );
  }
}
