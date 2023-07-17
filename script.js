const apiKey =  `42834dd289004b0786c13825231707`;
const apiUrl =  `https://api.weatherapi.com/v1/current.json`;

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationName = document.getElementById('locationName');
const weatherIcon = document.getElementById('weatherIcon');
const temperatureValue = document.getElementById('temperatureValue');
const temperatureUnit = document.getElementById('temperatureUnit');
const weatherDescription = document.getElementById('weatherDescription');

searchButton.addEventListener('click', searchWeather);
locationInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchWeather();
  }
});

function searchWeather() {
  const location = locationInput.value;
  if (location) {
    getWeatherData(location);
  }
}

function getWeatherData(location) {
    const url = `${apiUrl}?key=${apiKey}&q=${location}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {temp_c, temp_f, condition, icon} = data.current;

        locationName.textContent=data.location.name;
        temperatureValue.textContent = temp_c;
        temperatureUnit.textContent = '°C';
        weatherDescription.textContent = condition.text;
        weatherIcon.src = './images/icon.png';
    })
    .catch(error => {
        console.log('Error fetching weather data', error);
    })
}