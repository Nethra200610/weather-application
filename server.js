const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    const city = req.query.city;

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
        );

        res.json(response.data);
    } catch (error) {
        res.status(400).json({
            message: "City not found"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});