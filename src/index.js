import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "27 deg C",
      humidity: "50%",
      pressure: "1 atm"
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(event) {
    let apiUrl = "https://62698cf5-48ab-46ad-83b7-25641f747d8e-00-2guyur95g356u.sisko.replit.dev/weatherData";
    fetch(apiUrl).then(data => data.json()).then((res) => {
      this.setState(state => ({
        temperature: Math.round(((res.temperature - 32) * 5) / 9) + " deg C",
        humidity: res.humidity + "%",
        pressure: res.pressure + " atm"
      }));
    }).catch(e => {
      console.log(e.message);
    });
  }

  render() {
    return (
      <div>
        <div id="title" className="">Weather Now</div>
        <div id="main" className="">
          <section id="temperature">
            <div id="label">Temperature</div>
            <div id="value">{this.state.temperature}</div>
          </section>
          <section id="humidity">
            <div id="label">Relative-Humidity</div>
            <div id="value">{this.state.humidity}</div>
          </section>
          <section id="pressure">
            <div id="label">Pressure</div>
            <div id="value">{this.state.pressure}</div>
          </section>
          <button id="getWeather" onClick={this.getWeather}>Get weather</button>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<WeatherApp />);