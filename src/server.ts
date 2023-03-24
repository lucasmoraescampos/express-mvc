import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api';

import 'reflect-metadata';

Reflect.metadata('design:paramtypes', []);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRoutes);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});