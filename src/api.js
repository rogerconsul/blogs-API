const express = require('express');
const loginController = require('./controllers/loginController');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginController);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
