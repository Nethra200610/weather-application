async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city";
        return;
    }

    const apiKey = "0ac05e9cdf280039217d6930c4ebdd59";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod != 200) {
            result.innerHTML = data.message;
            return;
        }

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        console.log(error);
        result.innerHTML = "Error fetching weather data";
    }
}
