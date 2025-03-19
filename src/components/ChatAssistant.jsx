
import React, { useState } from 'react';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import { useWeather } from '../context/WeatherContext';

function ChatAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const { weatherData, location } = useWeather();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          weather: weatherData,
          location: location?.name
        })
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Weather Assistant</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about the weather..."
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">Ask</Button>
      </Box>
      {response && (
        <Typography sx={{ mt: 2 }}>{response}</Typography>
      )}
    </Paper>
  );
}

export default ChatAssistant;
