import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
//home route
app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('listening on Port 3000');
});
