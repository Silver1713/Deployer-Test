const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(process.env.VALUE_TO_PRINT);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

