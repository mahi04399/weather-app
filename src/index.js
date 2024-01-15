import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 27,
      humidity: 50,
      pressure: "1"
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(event) {
    let apiUrl = "https://weather-app-lnd8.onrender.com/weatherData";
    fetch(apiUrl).then(data => data.json()).then((res) => {
      this.setState(state => ({
        temperature: Math.round(((res.temperature - 32) * 5) / 9),
        humidity: res.humidity,
        pressure: Math.round((res.pressure / 1000) * 0.9869),
      }));
    }).catch(e => {
      console.log(e.message);
    });
  }

  render() {
    return (
      <div>  
        <div id="title" className="">
          Weather Now</div>
        <div id="main" className="">
          <section id="temperature">
            <div id="label">Temperature</div>
            <div id="value">{this.state.temperature} deg C</div>
          </section>
          <section id="humidity">
            <div id="label">Relative-Humidity</div>
            <div id="value">{this.state.humidity}%</div>
          </section>
          <section id="pressure">
            <div id="label">Pressure</div>
            <div id="value">{this.state.pressure} atm</div>
          </section>
          <button id="getWeather" onClick={this.getWeather}>Get weather</button>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<WeatherApp />);