import React, { Component } from "react";
import "./charts.component.css";
import { Line, Bar } from "react-chartjs-2";

export class ChartsComponent extends Component {
  render() {
    let content = this.props.countryvalue ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: this.props.country.toUpperCase(),
              backgroundColor: ["#880202", "green", "black"],
              data: [this.props.cvalue, this.props.rvalue, this.props.dvalue],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    ) : (
      <Line
        data={{
          labels: this.props.detail.map((data) => data.reportDate),
          datasets: [
            {
              data: this.props.detail.map((data) => data.confirmed.total),
              label: "Infected",
              borderColor: "#880202",
              fill: true,
            },
            {
              data: this.props.detail.map((data) => data.deaths.total),
              label: "Deaths",
              borderColor: "black",
              fill: true,
            },
            {
              data: this.props.detail.map((data) => data.recovered.total),
              label: "Recovered",
              borderColor: "rgb(4, 87, 4)",
              fill: true,
            },
          ],
        }}
      />
    );
    return <div className="graph">{content}</div>;
  }
}
