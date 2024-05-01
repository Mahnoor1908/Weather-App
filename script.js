
const weather_element = document.getElementById("weather");
const temperature_main_element = document.getElementById("temperature-main");
console.log("temperature main element: ", temperature_main_element);
const weather_description_element = document.getElementById(
  "weather-description"
);

const weather_icon_element = document.getElementById("icon");
const temperature_element = document.getElementById("temperature");
const humidity_element = document.getElementById("humidity");
const wind_speed_element = document.getElementById("wind-speed");
console.log("wind element: ", wind_speed_element);
const country_element = document.getElementById("country");
const town_element = document.getElementById("city");
const sunset_element = document.getElementById("sunset-main");
const sunrise_element = document.getElementById("sunrise-main");

const cityNameByid = (id) => {
  if (id == "1") {
    return "karachi";
  } else if (id == "2") {
    return "Islamabad";
  } else if (id == "3") {
    return "Lahore";
  } else if (id == "4") {
    return "Washington";
  } else if (id == "5") {
    return "Multan";
  } else if (id == "6") {
    return "Toronto";
  } else if (id == "7") {
    return "Peshawar"
  }
};

async function updatingValues(data) {
  temperature_main_element.innerText = await `${data.main.temp} °C`;
  weather_element.innerText = await data.weather[0].main;
  wind_speed_element.innerText = await `${data.wind.speed}m/s`;
  humidity_element.innerText = await `${data.main.humidity}%`;
  country_element.innerText = await data.sys.country;
  temperature_element.innerText = await `${data.main.temp} °C`;
  town_element.innerText = await data.name;
  weather_description_element.innerText = await data.weather[0].description;
  sunset_element.innerText = await `${new Date(data.sys.sunset*1000)}`;
  sunrise_element.innerText = await `${new Date(data.sys.sunrise*1000)}`;
}


function getValue() {
  const selectElement = document.querySelector("#dropdown");
  let output = selectElement.value;
  var city = cityNameByid(output);
  const apiKey = "b8ccdd1fdfff90aad2c6effb84a10369";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=${city}&units=metric`;

  fetch(apiURL)
    .then(async (response) => {
      if (!response.ok) {
        alert("An error occured");
        return;
      }

      return response.json();
    })
    .then(async (data) => {
      updatingValues(data);
      console.log("Weather Data:", await data);
    });
}