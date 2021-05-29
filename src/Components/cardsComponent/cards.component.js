import React, { Component } from 'react'
import "./cards.component.css"
import http from '../../util/index'
import Util from '../../util/moment'
export class CardsComponent extends Component {
    constructor() {
        super();
        this.state = {
          confirmed: "",
          recovered:"",
          deaths:"",
        };
      }
      componentDidMount() {
        http
          .GET("/api")
          .then((response) => {
            this.setState({
              confirmed: response.data.confirmed.value,
              deaths:response.data.deaths.value,
              recovered:response.data.recovered.value
            });
          })
          .catch((err) => {
console.log(err)          });
      }
    render() {
        return (
            <div>
<div className="main-container">


<div className="main-card-container k">
  <div className="top-number-container">
    <p>
      INFECTED
    </p>
  </div>
 
  <div className="main-area-k">
  <h1 >{this.state.confirmed}</h1>

  </div>
  
  <div className="bottom-number-container">
    <p>
    {Util.formatDate()}
    </p>
  </div>
</div>
<div className="main-card-container q">
  <div className="top-number-container">
    <p>
      RECOVERED
    </p>
  </div>
 
  <div className="main-area-q">
  <h1 >{this.state.recovered}</h1>
  </div>
  
  <div className="bottom-number-container">
    <p>
       {Util.formatDate()}
    </p>
  </div>
</div>
<div className="main-card-container j">
  <div className="top-number-container">
    <p>
      DEATHS
    </p>
  </div>

  <div className="main-area-j">
      <h1>
       {this.state.deaths}
      </h1>
  </div>
 
  <div className="bottom-number-container">
    <p>
       {Util.formatDate()}
    </p>
  </div>
</div>



</div>
  </div>
        )
    }
}
