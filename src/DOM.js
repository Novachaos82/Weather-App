import { weatherApi } from "./weather_api";
let defaultValue = "mumbai";

const switching = () => {
  const sliderDiv = document.querySelector(".switcher");
  const checkbox = document.getElementById("check");
  const slider = document.querySelector(".slider");

  slider.addEventListener("click", () => {
    {
      checkbox.classList.toggle("active");
      func();
    }
  });
};

const fahrToCelsius = (temp) => {
  let celsius = temp - 273.15;
  return Math.round(celsius);
};

const celsiusToFahrenheit = (temp) => {
  let fahr = 1.8 * (temp - 273) + 32;
  return Math.round(fahr);
};
//const fahrToCel = (data)=>{
//    if()
//}

const formInteraction = () => {
  const searchBtn = document.getElementById("searchButton");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    func();
  });
};

const func = () => {
  let searchValue = document.getElementById("searchBar").value || defaultValue;
  weatherApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=cc4487625a762b0487d81b80ddd64e2b`
  ).then((data) => {
    //console.log(data);
    DOMupdate(data);
    updateImage(data);
  });
};

const updateImage = (data) => {
  const content = document.getElementById("content");
  if (data.weather[0].main === "Haze") {
    content.style.backgroundColor = "red";
  } else {
    content.style.background = "blue";
  }
};

const DOMupdate = (data) => {
  const cityName = document.querySelector(".cityName");
  const temperature = document.querySelector(".temperature");
  const atmosphere = document.querySelector(".atmosphere");

  const checkbox = document.getElementById("check");

  const feelsLike = document.querySelector(".feelsLike .info");
  const humidity = document.querySelector(".humidity .info");
  const windSpeed = document.querySelector(".windSpeed .info");
  const visibility = document.querySelector(".visibility .info");
  if (data.cod === "404") {
    alert("city not found");
  }
  cityName.textContent = data.name;

  temperature.textContent =
    checkbox.classList == "active"
      ? celsiusToFahrenheit(data.main.temp) + "F"
      : fahrToCelsius(data.main.temp) + "C";

  atmosphere.textContent = data.weather[0].main;

  feelsLike.textContent =
    checkbox.classList == "active"
      ? celsiusToFahrenheit(data.main.feels_like) + "F"
      : fahrToCelsius(data.main.feels_like) + "C";

  humidity.textContent = data.main.humidity + "%";
  windSpeed.textContent =
    Math.round((data.wind.speed * 60 * 60) / 1000) + "Kph";
  visibility.textContent = data.visibility / 1000 + "km";
};

export { switching, formInteraction };
