const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable or default to 3001

app.use(cors());

app.get('/search', async (req, res) => {
    const { query } = req.query; // Get query from the URL
    const apiKey = process.env.API_KEY; // Use API key from .env file
    const apiUrl = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from SerpAPI:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
