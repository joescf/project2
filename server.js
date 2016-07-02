'use strict';
const express                   = require('express');
const path                      = require('path');
const logger                    = require('morgan');
const bodyParser                = require('body-parser');
const session                   = require('express-session');
const methodOverride            = require('method-override');

const homeController            = require('./controllers/home');
const userController            = require('./controllers/user');
// const loginController           = require('./controllers/login');
const laureatesController       = require('./controllers/laureates');
const filterLaureates           = require('./models/laureate');

const app                       = express();
const PORT                      = process.env.PORT || 3000;


app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'runningteeth',
  cookie: {maxAge: 60000}
}));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')));

app.use('/', homeController);
app.use('/user', userController);
// app.use('/login', loginController);
app.use('/api', laureatesController);

app.listen(PORT, function() {
  console.log('Server is listening on ' + PORT);
});





