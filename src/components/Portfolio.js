import React, { Component } from 'react';
import coded19 from './img/Coded-19.PNG';
import weatherDashboard from './img/WeatherDashboard.PNG';
import pokeApp from './img/PokeBase.PNG';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <img src={coded19} alt="Coded-19 App"/>
          <a href="https://elijahig.github.io/Coded-19-app/">Coded-19</a>
          <br></br>
          <img src={weatherDashboard} alt="Weather Dashboard"/>
          <a href="https://elijahig.github.io/weather-dashboard/">Weather-Dashboard</a>
          <br></br>
          <img src={pokeApp} alt="Poke Base"/>
          <a href="https://poke-base-app.herokuapp.com/">Poke-App</a>
        </div>
      </div>
  </section>
        );
  }
}