import express from 'express';
// eslint-disable-next-line import/no-unresolved
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello' }));

app.listen(3333);
