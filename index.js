const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const date = require('date-and-time');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(cors());

function log(...args) {
  console.log(...args); // eslint-disable-line no-console
}

function logData(body) {
  const { enqueued, retries, scheduled } = body;
  const now = new Date();
  const formattedDate = date.format(now, 'MM/DD/YYYY');
  const formattedTime = date.format(now, 'HH:mm:ss');
  const line = [formattedDate, formattedTime, enqueued, retries, scheduled].join('\t');
  console.log(line); // eslint-disable-line no-console
  fs.appendFile('lines.txt', `${line}\n`);
}

app.post('/', (req, res) => {
  logData(req.body);
  res.json({ result: 'success' });
});

app.listen(port, () => log(`Awaiting stats on ${port}`));
