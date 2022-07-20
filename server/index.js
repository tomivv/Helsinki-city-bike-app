const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send("Hello bike world!")
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});