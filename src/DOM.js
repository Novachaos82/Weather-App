import { weatherApi } from "./weather_api";
/*default search value on page load*/
let searchValue = "mumbai";
const switching = () => {
  const sliderDiv = document.querySelector(".switcher");
  const checkbox = document.getElementById("check");
  const slider = document.querySelector(".slider");

  slider.addEventListener("click", () => {
    {
      checkbox.classList.toggle("active");
      funcFetcher();
    }
  });
};

/*form submit */
const formInteraction = () => {
  const searchBtn = document.getElementById("searchButton");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    funcFetcher();
    load();
  });
};

/*fetcher which fetches info from async await function on weather_api.js*/
const funcFetcher = () => {
  searchValue = document.getElementById("searchBar").value || searchValue;
  weatherApi(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=cc4487625a762b0487d81b80ddd64e2b`
  ).then((data) => {
    //console.log(data);
    DOMupdate(data);
    updateImage(data);
  });
};

/*image update based on weather*/
const updateImage = (data) => {
  const content = document.getElementById("content");
  let weather = data.weather[0].main;
  if (weather === "Haze") {
    //content.style.backgroundImage =
    //  "url('./assets/jaleel-akbash-Slh0Tx1MRNA-unsplash.jpg')";
    content.style.backgroundImage =
      "url('./assets/jaleel-akbash-Slh0Tx1MRNA-unsplash.jpg')";
  } else if (weather === "Rain" || weather === "Drizzle") {
    content.style.background =
      "url('./assets/anna-atkins-rNBaaxyeWWM-unsplash.jpg')";
  } else if (weather === "Clouds") {
    content.style.background =
      "url('./assets/rodion-kutsaev-8P-uQaTd8rw-unsplash.jpg')";
  } else if (weather === "Mist") {
    content.style.background =
      "url('./assets/dave-hoefler-od287vQyufw-unsplash.jpg')";
  }
};

/*DOM updates*/
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
    clear();
  }
  cityName.textContent = data.name;

  temperature.textContent =
    checkbox.classList == "active"
      ? celsiusToFahrenheit(data.main.temp) + "°F"
      : fahrToCelsius(data.main.temp) + "°C";

  atmosphere.textContent = data.weather[0].main;

  feelsLike.textContent =
    checkbox.classList == "active"
      ? celsiusToFahrenheit(data.main.feels_like) + "°F"
      : fahrToCelsius(data.main.feels_like) + "°C";

  humidity.textContent = data.main.humidity + "%";
  windSpeed.textContent =
    Math.round((data.wind.speed * 60 * 60) / 1000) + "Kph";
  visibility.textContent = data.visibility / 1000 + "km";
};
/*clear to clear content on error*/
const clear = () => {
  document.querySelector(".main-text").style.visibility = "hidden";
  document.querySelector(".additional-text").style.visibility = "hidden";
};

/*loading the content after the error has happened*/
const load = () => {
  document.querySelector(".main-text").style.visibility = "visible";
  document.querySelector(".additional-text").style.visibility = "visible";
};

/*kelvin to celsius*/
const fahrToCelsius = (temp) => {
  let celsius = temp - 273.15;
  return Math.round(celsius);
};

/*kelvin to fahrenheit*/
const celsiusToFahrenheit = (temp) => {
  let fahr = 1.8 * (temp - 273) + 32;
  return Math.round(fahr);
};

export { switching, formInteraction, funcFetcher };
