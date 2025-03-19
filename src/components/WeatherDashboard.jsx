
import React from 'react';
import { Paper, Typography, Grid, Box, TextField, Button } from '@mui/material';
import { useWeather } from '../context/WeatherContext';

function WeatherDashboard() {
  const { weatherData, location, fetchWeather } = useWeather();
  const [searchInput, setSearchInput] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput) {
      fetchWeather(searchInput);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box component="form" onSubmit={handleSearch} sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <TextField
              fullWidth
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter location"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">Search</Button>
          </Grid>
        </Grid>
      </Box>
      
      {weatherData && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">{location?.name}</Typography>
            <Typography variant="h2">{weatherData.temp_c}°C</Typography>
            <Typography variant="h6">{weatherData.condition.text}</Typography>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}

export default WeatherDashboard;
