const createError = require('http-errors');
const express = require('express');
const path = require('path');
;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

app.use(Session({
  secret : 'paulodev',
  resave : true,
  saveUninitialized : true
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(process.env.port || 3000)

module.exports = app;