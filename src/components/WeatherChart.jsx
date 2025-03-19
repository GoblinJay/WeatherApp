
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { useWeather } from '../context/WeatherContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeatherChart() {
  const { forecast } = useWeather();

  const data = {
    labels: forecast.map(day => day.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.map(day => day.day.avgtemp_c),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Precipitation (%)',
        data: forecast.map(day => day.day.daily_chance_of_rain),
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>7-Day Forecast</Typography>
      <Line data={data} options={{ responsive: true }} />
    </Paper>
  );
}

export default WeatherChart;
