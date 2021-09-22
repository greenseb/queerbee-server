const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

const origin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://localife.netlify.app';

const corsConfig = {
  origin: origin,
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`Server is running on http://localhost:${PORT}!!🐝`);
});
