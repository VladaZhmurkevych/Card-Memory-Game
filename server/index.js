const compression = require('compression');
const express = require('express');
const Router = require('./routers');

const app = express();
require('dotenv').config({ path: `${__dirname}/config/.env` });

app.use(compression());
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Router.cards);

app.listen(process.env.PORT, (error) => {
  if (error) return console.log(error);
  console.log('App started on the port: ', process.env.PORT);
});