import React, { useEffect, useState } from 'react'
import './style.css'
import Search from './Search'
const Weather = () => {
  const[city, setCity]= useState('');
  const [weatherData, setWeatherData] = useState({});
  function handleOnChange(e){
    setCity(e.target.value)
  }

  function handleSearch(){
    fetchWeatherData();
  }
  async function fetchWeatherData(){
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&`
    );
    const result = await response.json();
    // console.log(result);
    setWeatherData(result)
    console.log(weatherData); 
  }
  
  useEffect(()=>{
   fetchWeatherData() 
  },[])

  function getCurrentDate(){
    return new Date().toLocaleString('en-us',{
      weekday:'long',
      month:'long',
      day:'numeric',
      year:'numeric'
    })
  }
  return (
    <>
      <div className="weather-card">
        <div className="upper-card">
          <Search
            handleOnChange={handleOnChange}
            city={city}
            handleSearch={handleSearch}
          />
        </div>
        <div>
          {weatherData && weatherData.main ? (
            <div>
              <h1 id="location">
                {weatherData.name}, <span>{weatherData.sys.country}</span>
              </h1>
              <h2 id="date">{getCurrentDate()}</h2>
              <h2>Weather Today</h2>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
              <h2> {weatherData.weather[0].main}</h2>

              <p>{weatherData.weather[0].description}</p>
              <div className="description">
                <div className="temp">
                  <h2>Temperature</h2>
                  <p>temp: {weatherData.main.temp} °C</p>
                  <p>humidity: {weatherData.main.humidity}%</p>
                </div>
                <div className="wind">
                  <h2>Wind</h2>
                  <p> Wind speed: {weatherData.wind.speed} km/hr</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Weather
