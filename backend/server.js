const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mainRouter = require('./routes');

dotenv.config();

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.use('/', mainRouter);

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
