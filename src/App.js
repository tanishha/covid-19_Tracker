import React, { Component } from 'react'
import './App.css';
import  { CardsComponent } from './Components/cardsComponent/cards.component';
import  { ChartsComponent } from './Components/chartsComponent/charts.component';
import  { CountryComponent } from './Components/countryComponent/country.component'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <CardsComponent></CardsComponent>
       <ChartsComponent></ChartsComponent>
       <CountryComponent></CountryComponent>  
      </div>
    );
  }
} 


  
