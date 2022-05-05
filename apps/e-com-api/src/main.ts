/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to e-com-api!' });
});

app.use('/public', express.static(path.join(__dirname, 'assets/public')));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
