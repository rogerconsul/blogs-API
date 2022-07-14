require('dotenv').config();

const loginController = require('./controllers/loginController');
const { create, getAll, getById } = require('./controllers/userController');
const validateJWT = require('./middlewares/validateJWT');
const { postCategory } = require('./controllers/categoryController');

const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController);
app.post('/user', create);
app.get('/user', validateJWT, getAll);
app.get('/user/:id', validateJWT, getById);
app.post('/categories', validateJWT, postCategory);

app.listen(port, () => console.log('ouvindo porta', port));
