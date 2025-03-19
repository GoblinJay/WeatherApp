
const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/chat', async (req, res) => {
  try {
    const { query, weather, location } = req.body;
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: `You are a helpful weather assistant. Current weather in ${location}: ${JSON.stringify(weather)}`
      }, {
        role: "user",
        content: query
      }]
    });
    res.json({ response: completion.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
