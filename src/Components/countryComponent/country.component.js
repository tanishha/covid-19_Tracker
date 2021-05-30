import React, { Component } from "react";
import "./country.component.css";
export class CountryComponent extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      data: {
        country: "",
      },
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState((pre) => ({
      data: {
        ...pre.data,
        [name]: value,
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitCallback(this.state.data.country);
    console.log(this.state.data.country);
  };
  render() {
    return (
      <div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search country"
              name="country"
              className="input"
              value={this.state.data.country}
              onChange={this.handleChange}
              autoComplete="false"
            />
            <button type="submit" className="button">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
