const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const passport   = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = require('./routes/auth');
const placeRoutes = require('./routes/placeRoutes');
const planRoutes = require('./routes/planRoutes');

const userRoutes = require('./routes/userRoutes');

const dotenv = require('dotenv').load()

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const dbUrl = process.env.dbURL;
const dbApelo = 'mongodb://localhost/angular-auth'

  console.time('db');

mongoose.connect(dbApelo)
   .then( () => {
     console.log(`Connected to ${dbUrl}`);
     console.timeEnd('db');
   })
   .catch( e => console.log(e));


var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60*60*24*365 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport/serializers');
require('./passport/local');
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
app.use('/place', placeRoutes)
app.use('/plan', planRoutes)
app.use('/user', userRoutes)

app.all('/*', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
 });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
