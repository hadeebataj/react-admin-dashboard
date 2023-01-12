import React, { useEffect, useState } from 'react'

const Weather = (city) => {
    let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
    const [weatherData, setWeatherData] = useState([])

    /**
     * Retrieve weather data from openweathermap
     * https://api.openweathermap.org/data/2.5/weather?q=london&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
     */
    const getWeatherData = async (city) => {
      const URL = "https://api.openweathermap.org/data/2.5/weather";
      const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
      const weatherPromise = await fetch(FULL_URL);
      return weatherPromise.then((response) => {
        return response.json();
    })
    }
    
   useEffect(() => {
    console.log(city);
    getWeatherData(city).then((response) => {
        console.log(response);
        setWeatherData(response);
    }).catch((error) => {
        alert(error);
    });
   }, [])

  return (
  <div>
    <h2>{weatherData.weather.main}</h2>
      

  </div>
  )



}

export default Weather