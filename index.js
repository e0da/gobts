const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

function log(...args) {
  console.log(...args); // eslint-disable-line no-console
}

app.post('/', (req, res) => {
  debugger;
  res.json({ result: 'success' });
});

app.listen(port, () => log(`Awaiting stats on ${port}`));
