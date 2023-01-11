let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

export const getWeatherData = async () => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=london&appid=${API_KEY}&units=imperial`;
  const weatherData = await fetch(FULL_URL)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(data);
    });
  return weatherData;
};
