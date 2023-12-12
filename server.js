import express from 'express';
import { connect } from './database.js';
import cors from 'cors';

import clienteRoute from './routes/cliente.route.js';

const conn = connect();

var app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use('/api/cliente', clienteRoute);

app.listen(PORT, () => console.log(`Now browse to localhost: ${PORT}`));
