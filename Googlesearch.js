const express = require('express');
const fetch = require('node-fetch');
const app = express();

const GOOGLE_API_KEY = 'AIzaSyAt1z5I5nrnmp69JnacF9a91GNruFNwe30'; // Add your Google API key
const CX = 'a562f8feb1780416f'; // Your Custom Search Engine ID (without the script tag)

app.get('/search/google', async (req, res) => {
    const query = req.query.q;
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${GOOGLE_API_KEY}&cx=${CX}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data); // Send back the search results
    } catch (error) {
        console.error('Error fetching Google results:', error);
        res.status(500).send('Error retrieving Google search results');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
