require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Fetch API keys from .env file
const HF_API_KEY = process.env.HF_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// Endpoint to get farming advice from Hugging Face model
app.post('/getFarmingAdvice', async (req, res) => {
    const prompt = req.body.prompt || 'Tell me about farming advice.';  // Default prompt

    try {
        const response = await axios.post('https://api-inference.huggingface.co/models/gpt2', {
            inputs: prompt,
        }, {
            headers: {
                Authorization: `Bearer ${HF_API_KEY}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error with Hugging Face API:', error.message);
        res.status(500).json({ error: 'Error connecting to Hugging Face API' });
    }
});

// Endpoint to get weather data using Weather API
app.get('/getWeather', async (req, res) => {
    const city = req.query.city || 'London';  // Default city

    try {
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: WEATHER_API_KEY,
                units: 'metric',  // Use 'imperial' for Fahrenheit
            },
        });

        res.json(weatherResponse.data);
    } catch (error) {
        console.error('Error with Weather API:', error.message);
        res.status(500).json({ error: 'Error connecting to Weather API' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
