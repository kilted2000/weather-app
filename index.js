
/*const API_KEY = "0ec221dcabaa5970b5589ff28f51b0a0";
const API_URL =`http://api.openweathermap.org/data/2.5`;

fetch('http://api.openweathermap.org/data/2.5')


const API_KEY = "0ec221dcabaa5970b5589ff28f51b0a0";
const API_URL = `http://api.openweathermap.org/data/2.5`;

async function getForcast(city="memphis"){
    const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await response.json();
    console.log(data);
}
getForcast();*/
let weather = {
    apiKey: "0ec221dcabaa5970b5589ff28f51b0a0",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "F°";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        'CastleCraig_Scotland.jpeg'+ name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Memphis");