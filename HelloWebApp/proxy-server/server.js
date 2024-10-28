const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001; // You can use any available port

app.use(cors());

app.get('/search', async (req, res) => {
    const { query } = req.query; // Get query from the URL
    const apiKey = '5610e21d31ee63cfce6df2b13a5279f8017855dba24b8cb9976caa681142110a'; // Your API key
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
