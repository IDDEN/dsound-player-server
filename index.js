require('dotenv').config();
const { PORT, ACCOUNT, REPOSITORY } = process.env;
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const server = express();

// Express handlebar config
server.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
server.set('view engine', '.hbs');

// Serve public files
server.use('/static', express.static(path.join(__dirname, 'public')));

// Setup hazel variables
const hazel = require('hazel-server')({
   account: ACCOUNT,
   repository: REPOSITORY
});

// Routes
server.get('/', (req, res) => {
   res.render('home');
});

server.get('/downloads', (req, res) => {
   res.render('downloads');
});

server.get('*', (req, res) => {
   hazel(req, res);
});

server.listen(PORT, () => {
   console.log(`Running on http://localhost:${PORT}`);
});