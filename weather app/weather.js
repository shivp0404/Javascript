// Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
const apiKey = 'enter your api key';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data based on user input
function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName) {
        // Construct the API URL with parameters
        const apiUrlWithParams = `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

        // Fetch weather data from the API
        fetch(apiUrlWithParams)
            .then(response => response.json())
            .then(data => {
                // Display the fetched weather data on the page
                displayWeather(data);
            })
            .catch(error => {
                // Handle errors during the API request
                console.error('Error fetching weather data:', error);
                displayError();
            });
    }
}

// Function to display weather information on the page
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Function to display an error message on the page
function displayError() {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
}

  
