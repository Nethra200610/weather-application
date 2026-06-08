async function getWeather() {

    const city =
        document.getElementById("cityInput").value.trim();

    const result =
        document.getElementById("weatherResult");

    if(city === ""){
        result.innerHTML = "Please enter a city";
        return;
    }

    try {

        const response =
            await fetch(`/weather?city=${city}`);

        const data =
            await response.json();

        if(data.message){
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
    console.log(error.response?.data || error.message);

    res.status(400).json({
        message: error.response?.data?.message || error.message
    });
}
}