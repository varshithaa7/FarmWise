const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Route to interact with the Grok API
app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post('https://api.grok.ai/v1/chat/completions', {
      prompt: prompt,
      // Add any required headers for authentication
    }, {
      headers: {
        'Authorization': `Bearer YOUR_GROK_API_KEY`,
        'Content-Type': 'application/json',
      }
    });

    // Send the response from Grok API to the frontend
    res.json({ message: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error with Grok API:', error.message);
    res.status(500).send('Error processing request');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
