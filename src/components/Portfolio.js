import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <img src="img/Coded-19.PNG" alt="Coded-19"></img>
          <a href="https://elijahig.github.io/Coded-19-app/">Coded-19</a>
          <br></br>
          <img src="img/WeatherDashboard.PNG" alt="Weather Dashboard"></img>
          <a href="https://elijahig.github.io/weather-dashboard/">Weather-Dashboard</a>
          <br></br>
          <img src="img/PokeBase.PNG" alt="PokeBase"></img>
          <a href="https://poke-base-app.herokuapp.com/">Poke-App</a>
        </div>
      </div>
  </section>
        );
  }
}