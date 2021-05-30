import React, { Component } from "react";
import "./country.component.css";
import http from "../../util/index";

export class CountryComponent extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      country: "",
      set:"",
    };
  }
  // componentDidMount() {
  //   http
  //     .GET("/api/countries")
  //     .then((response) => {
  //       this.setState({
  //         countries: response.data.countries,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  handleChange = (e) => {

    this.setState({
      country: e.target.value,
    });

    this.props.submitCallback(this.state.country);

    console.log(this.state.country);

  };
  render() {
    return (
      <div>
   <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    </div>
        {/* <select onChange={this.handleChange}>
          <option value="">{this.props.title}</option>

          {this.state.countries.map((item, i) => (
            <option key={i}  value={item.name}>
              {item.name}
            </option>
          ))}
        </select> */}
      </div>
    );
  }
}
