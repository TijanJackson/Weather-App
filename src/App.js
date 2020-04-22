import React, { Component } from 'react';
import 'isomorphic-fetch'; 
import './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            main: '',
            mainMin: '',
            name: 'City name',
            celsius: true,
            fahrenheit: false,
            kelvin: 273,
            multiply: 1,
            thirtyTwo: 0
        };
        this.searchWeather = this.searchWeather.bind(this);
        this.changeToF = this.changeToF.bind(this);
        this.changeToC = this.changeToC.bind(this);
    }

    // converts to fahrenheit
    changeToF(e) {
        this.setState({
            celsius: false,
            fahrenheit: true,
            multiply: 1.8,
            thirtyTwo: 32

        })
    }

    // converts to celsius
    changeToC(e) {
        this.setState({
            celsius: true,
            fahrenheit: false,
            multiply: 1,
            thirtyTwo: 0

        })
    }

   // http://api.openweathermap.org/data/2.5/weather?q=london&APPID=94033fe10a92947fef19fe1f5c0506c7

    searchWeather() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('weather').value}&APPID=94033fe10a92947fef19fe1f5c0506c7`)
            .then(res => res.json()) 
            .then(
                (result) => {
                    this.setState({
                        main: result.main.temp_max,
                        mainMin: result.main.temp_min,
                        name: result.name
                    });
                },
                // error handling takes place here
                (error) => {
                    this.setState({
                        error
                    });
                })
    }

    render() {
     const { error,  main, mainMin, multiply, thirtyTwo, name} = this.state;
     if (error) {
         return <div>Error: {error.message}</div>;
     } 
    else {
         return (
             <div className="App">
               <h1 id="title">Weather App</h1>
               <form>
                   <div id="type">
                   <label>Type a City Name: </label>
                   <input id="weather" type="text" placeholder=" Type a city name here"></input>
                   </div>
               </form>
               <div id="buttons">
               <button className="btn" id="search" onClick={this.searchWeather}>Check temperature</button>
               <br></br>
               <br></br>
               <button className="btn" id="changeF" onClick={this.changeToF}>Change to fahrenheit</button>
               <button className="btn" id="changeC" onClick={this.changeToC}>Change to celsius</button>
               </div>
               {/* Displays the initial value, then after the search function has run, it displays
               the value retrieved and subtracts 273.15 from it in order to display the weather in celsius */}
               <h2 id="weatherName">{name}</h2>
               <div id="weatherDetails">
               <h3>Max temp: {Math.round( ((main - 273.15) * multiply) + thirtyTwo)}°C</h3>
               <h3>Min Temp: {Math.round( ((mainMin - 273.15) * multiply) + thirtyTwo)}°C</h3>
               </div>
            </div>
         );
     }
 }
 }


 export default App;