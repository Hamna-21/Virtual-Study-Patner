const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const youtubeApiKey = 'AIzaSyDp1-BvhzhGJ8eKS4mM_6exGVN81luKH8g'; // Replace with your YouTube API Key
const googleApiKey = 'AIzaSyDp1-BvhzhGJ8eKS4mM_6exGVN81luKH8g'; // Replace with your Google API Key
const searchEngineId = 'YOUR_SEARCH_ENGINE_ID';  // Replace with your Custom Search Engine ID

app.use(express.static('public'));
app.use(express.json());

// Route for YouTube search
app.get('/search/youtube', async (req, res) => {
  const query = req.query.q;
  const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${youtubeApiKey}&part=snippet&type=video`;

  try {
    const response = await axios.get(youtubeUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching YouTube data' });
  }
});

// Route for Google Custom Search
app.get('/search/google', async (req, res) => {
  const query = req.query.q;
  const googleUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${googleApiKey}&cx=${searchEngineId}`;

  try {
    const response = await axios.get(googleUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Google search data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
