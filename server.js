
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRouter = require('./api/chat');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', chatRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
