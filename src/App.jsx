
import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import WeatherDashboard from './components/WeatherDashboard';
import WeatherMap from './components/WeatherMap';
import WeatherChart from './components/WeatherChart';
import ChatAssistant from './components/ChatAssistant';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ py: 4 }}>
          <Grid item xs={12} md={8}>
            <WeatherDashboard />
            <Box sx={{ mt: 3 }}>
              <WeatherChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <WeatherMap />
            <Box sx={{ mt: 3 }}>
              <ChatAssistant />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </WeatherProvider>
  );
}

export default App;
