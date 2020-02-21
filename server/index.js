const express = require('express');
const bodyParser = require('body-parser');

require('./db');
const routeUser = require ('./controllers/users');

const app = express();

app.use(bodyParser.json);

app.use('/users', routeUser);

app.listen(3000, () => console.log('seveur connected port 3000'));