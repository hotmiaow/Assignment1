// Load the depends modules
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

// Express middleware configuration
module.exports = function () {
  const app = express();
// check environment
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Define your session secret
  //const sessionSecret = 'your-secret-key-here';
    const sessionSecret='developmentSessionSecret';
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: sessionSecret
  }));
// Set view engine
  app.set('views', './app/views');
// set 'views' folder
  app.set('view engine', 'ejs');

  // indicate route file
app.use('/', require('../app/routes/index.server.routes.js'));

//app.use('/', 'routes');

//require('../app/routes/index.server.routes.js')(app);

  // Example route for demonstration
  //app.get('/', (req, res) => {
    //res.render('index'); // Replace 'index' with the name of your template
    //});

    //require('../app/routes/index.server.routes.js')(app);


    // config static files folder
  app.use(express.static('./public'));

  return app;
};
