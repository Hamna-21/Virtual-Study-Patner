const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios'); // Use axios for API requests

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = 5000;

// Set up middleware to handle JSON data
app.use(express.json());
app.use(cors());

// Root route to handle GET requests to "/"
app.get('/', (req, res) => {
  res.send('Server is running! Visit /ask to interact with AI.');
});

// Route to handle incoming messages
app.post('/ask', async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Validate userMessage
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Send the user's message to Gemini API using axios
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{ text: userMessage }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const responseData = response.data;
    console.log('Gemini API Response:', responseData);  // Log the entire response

    // Check if the response contains candidates and content
    if (!responseData || !responseData.candidates || !responseData.candidates[0].content || !responseData.candidates[0].content.parts) {
      return res.status(500).json({
        error: 'Error in Gemini response format. Could not parse content.'
      });
    }

    // Extract the text from the first part of the content array
    const aiResponse = responseData.candidates[0].content.parts[0].text.trim();

    // Send AI's response back to the client
    res.json({ answer: aiResponse });
  } catch (error) {
    console.error('Error interacting with Gemini:', error.message);
    res.status(500).json({
      error: 'Something went wrong while interacting with Gemini.',
      details: error.message
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

