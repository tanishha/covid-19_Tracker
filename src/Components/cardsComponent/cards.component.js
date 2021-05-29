import React, { Component } from 'react'
import "./cards.component.css"

export class CardsComponent extends Component {
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
  <h1 >100</h1>

  </div>
  
  <div className="bottom-number-container">
    <p>
      Date
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
  <h1 >100</h1>
  </div>
  
  <div className="bottom-number-container">
    <p>
      Date
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
        100
      </h1>
  </div>
 
  <div className="bottom-number-container">
    <p>
      Date
    </p>
  </div>
</div>



</div>
  </div>
        )
    }
}
