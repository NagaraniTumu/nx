import * as express from 'express';

import { Message } from '@bghoard/api-interfaces';

import { getGames } from './app/game';
import { createReview, getReviews } from './app/review';
import { addItemToCart, getCart, updateItemInCart } from './app/store';

const app = express();

app.get('/api', (req, res) => {
  const greeting: Message = { message: 'Welcome to api!' };
  res.send(greeting);
});

app.get('/api/game', getGames);

app.get('/api/review/:game', getReviews);
app.get('/api/review/:game', createReview);

app.get('/api/cart', getCart);
app.get('/api/cart', addItemToCart);
app.get('/api/cart', updateItemInCart);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
