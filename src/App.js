import React, { Component } from 'react'
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BannerComponent from './Components/bannerComponent/banner.component';
import  { CardsComponent } from './Components/cardsComponent/cards.component';
import  { ChartsComponent } from './Components/chartsComponent/charts.component';
import  { CountryComponent } from './Components/countryComponent/country.component'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <ToastContainer />
       <BannerComponent></BannerComponent>
       <CardsComponent></CardsComponent>
       <ChartsComponent></ChartsComponent>
      </div>
    );
  }
} 


  
