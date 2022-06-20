'use strict';

const input = document.querySelector('.input-search');
const btnSearch = document.querySelector('.search-btn');
const city = document.querySelector('.city');
const temprature = document.querySelector('.temp');
const condition = document.querySelector('.cloud');
const humidity2 = document.querySelector('.humidity');
const speed2 = document.querySelector('.speed');
const weatherIcon = document.querySelector('.weather-icon');
const weatherCondition = document.querySelector('.weather-condition');

var token = config.MY_API_TOKEN;

let weather = {
  apiKey: token,
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then(response => response.json())
      .then(data => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    city.textContent = `Weather in ${name}`;
    temprature.textContent = `${temp}°C`;
    condition.textContent = description;
    humidity2.textContent = `Humidity: ${humidity}%`;
    speed2.textContent = `Wind Speed: ${speed} km/h`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;

    // document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`;
  },
};

const clickEnter = function () {
  weather.fetchWeather(input.value);
  document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${input.value}")`;
  input.value = '';
  weatherCondition.style.display = 'block';
};

btnSearch.addEventListener('click', clickEnter);

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    clickEnter();
  }
});

// console.log(input.value);
weather.fetchWeather('nigeria');
