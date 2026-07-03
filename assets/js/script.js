"use strict";

/* ==========================================================
   WEATHER APP
========================================================== */

const WeatherApp = {

    /* ======================================================
       APP STATE
    ====================================================== */

    apiKey: "",

    currentUnit: "metric",

    currentCity: "Pune",

    weatherData: null,

    forecastData: [],

    searchHistory: []

};

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const themeToggle = document.getElementById("themeToggle");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const weatherCondition = document.getElementById("weatherCondition");

const currentDate = document.getElementById("currentDate");

const humidity = document.getElementById("humidity");

const windSpeed = document.getElementById("windSpeed");

const pressure = document.getElementById("pressure");

const visibility = document.getElementById("visibility");

const weatherIcon = document.getElementById("weatherIcon");

const forecastContainer = document.getElementById("forecastContainer");/* ==========================================================
   INITIALIZE APPLICATION
========================================================== */

function init() {

    console.log("🌦️ WeatherSphere Started");

    bindEvents();

    setCurrentDate();

}

/* ==========================================================
   EVENT LISTENERS
========================================================== */

function bindEvents() {

    searchBtn.addEventListener("click", handleSearch);

    cityInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            handleSearch();

        }

    });

    themeToggle.addEventListener("click", toggleTheme);

}

/* ==========================================================
   SEARCH HANDLER
========================================================== */

function handleSearch() {

    const city = cityInput.value.trim();

    if (city === "") {

        alert("Please enter a city name.");

        cityInput.focus();

        return;

    }

    WeatherApp.currentCity = city;

    console.log("Searching:", city);

    /*
        API CALL
        (Phase 5 madhye implement karu)
    */

}

/* ==========================================================
   DATE FUNCTION
========================================================== */

function setCurrentDate() {

    const today = new Date();

    currentDate.textContent = today.toDateString();

}

/* ==========================================================
   THEME TOGGLE
========================================================== */

function toggleTheme() {

    document.body.classList.toggle("light-theme");

}

/* ==========================================================
   APP START
========================================================== */

document.addEventListener("DOMContentLoaded", init);

/* ==========================================================
   LOADING STATE
========================================================== */

function showLoading() {

    searchBtn.disabled = true;

    searchBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm"></span>
        Loading...
    `;

}

function hideLoading() {

    searchBtn.disabled = false;

    searchBtn.innerHTML = `
        <i class="bi bi-search"></i>
        Search
    `;

}

/* ==========================================================
   RESET WEATHER CARD
========================================================== */

function resetWeatherCard() {

    cityName.textContent = "--";

    temperature.textContent = "--°C";

    weatherCondition.textContent = "--";

    humidity.textContent = "--";

    windSpeed.textContent = "--";

    pressure.textContent = "--";

    visibility.textContent = "--";

}

/* ==========================================================
   UPDATE WEATHER UI
========================================================== */

function updateWeatherUI(data) {

    cityName.textContent = data.city;

    temperature.textContent = `${data.temp}°C`;

    weatherCondition.textContent = data.condition;

    humidity.textContent = `${data.humidity}%`;

    windSpeed.textContent = `${data.wind} km/h`;

    pressure.textContent = `${data.pressure} hPa`;

    visibility.textContent = `${data.visibility} km`;

}

/* ==========================================================
   ERROR MESSAGE
========================================================== */

function showError(message) {

    alert(message);

}

/* ==========================================================
   CLEAR SEARCH
========================================================== */

function clearSearch() {

    cityInput.value = "";

}

/* ==========================================================
   TEST DATA
   (Temporary – API integration in Phase 5)
========================================================== */

const sampleWeather = {

    city: "Pune",

    temp: 29,

    condition: "Clear Sky",

    humidity: 68,

    wind: 12,

    pressure: 1012,

    visibility: 10

};

/* ==========================================================
   TEMPORARY TEST
========================================================== */

updateWeatherUI(sampleWeather);