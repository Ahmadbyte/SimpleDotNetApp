const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable or default to 3001

// Allow CORS from any origin
app.use(cors());

app.get('/search', async (req, res) => {
    const { query } = req.query; // Get query from the URL
    const apiKey = process.env.API_KEY; // Use API key from .env file
    const cx = 'a4f4acb621a6d4f72'; // Your Custom Search Engine ID
    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

    try {
        const response = await axios.get(apiUrl);
        // Set CORS headers to allow requests from any origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Google Custom Search API:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});