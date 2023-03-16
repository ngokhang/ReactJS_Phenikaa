const cityInput = document.getElementById("cityInput");
const cityForm = document.getElementById("cityForm");
const apiKey = "3a97527cefac4b3dc67a1a5493f4501f";
let cardWeather = document.querySelector(".col-md-4.card");
let weatherData = {};
let inputVal = "";

async function getWeatherData(city = "Hanoi") {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const dataWeather = await axios.get(weatherURL).then((res) => res.data);
  weatherData = {
    city: dataWeather.name,
    country: dataWeather.sys.country,
    temp: dataWeather.main.temp,
    weather: dataWeather.weather,
  };
  console.log(weatherData);
  render();
}

function render() {
  let cardBody = `<div class="card-body">
  <h5 class="card-title"> <span class="city__name">${weatherData.city}</span> <sup class="country__name text-white bg-warning px-2 rounded">${weatherData.country}</sup></h5>
  <p class="card-text">
    <span> <span class="temp fw-bold color-dark" style="font-size: 50px;">${weatherData.temp}</span></span>
    <sup style="font-size: 30px;">°C</sup>
  </p>
  <div class="image__weather">
    <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="" class="image">
  </div>
  <p class="describe__weather text-uppercase mt-3">${weatherData.weather[0].description}</p>
</div>`;

  cardWeather.innerHTML = cardBody;
}

getWeatherData();

cityForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!cityInput.value || cityInput.value.length === 0) {
    alert('Please enter your city'); 
    return;
  } else {
    inputVal = cityInput.value.trim();
    cityInput.value = '';
    await getWeatherData(inputVal);
    cardWeather.style.display = 'block';
  }
});

// (() => {
//   render();
// })();
