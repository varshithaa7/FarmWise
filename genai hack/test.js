const axios = require('axios');

async function getResponseFromHuggingFace() {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2', // Example model URL
      { inputs: 'Tell me about farming advice.' },
      {
        headers: {
          Authorization: `Bearer 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` // Replace with your Hugging Face API key
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error with Hugging Face API:', error.message);
  }
}

getResponseFromHuggingFace();
