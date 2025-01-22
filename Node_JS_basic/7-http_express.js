const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  const output = 'This is the list of our students\n';
  countStudents(database)
    .then((text) => {
      res.send(output + text);
    })
    .catch((error) => {
      res.send(output + error.message);
    });
});

app.listen(1245);

module.exports = app;
