//route file for our app on the server

const express = require('express');
const React = require('react');
const renderToSting = require('react-dom/server').renderToString;
const Home = require('./client/components/home').default;
const app = express();

app.get('/', (req, res) => {
  const content = renderToSting(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log('listening on Port 3000');
});
