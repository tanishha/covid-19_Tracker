import React, { Component } from 'react'
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BannerComponent from './Components/bannerComponent/banner.component';
import { MainComponent } from './Components/mainComponent/main.component';
import FooterComponent from './Components/footerComponent/footer.component';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <ToastContainer />
       <BannerComponent></BannerComponent>
       <MainComponent></MainComponent>
       <FooterComponent></FooterComponent>
      </div>
    );
  }
} 


  
