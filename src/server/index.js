// server config source copyright https://github.com/sahat/hackathon-starter
"use strict";
/**
 * Module dependencies.
 */
 const express = require('express');
 const compression = require('compression');
 const bodyParser = require('body-parser');
 const logger = require('morgan');
 const chalk = require('chalk');
 const errorHandler = require('errorhandler');
 const lusca = require('lusca');
 const dotenv = require('dotenv');
 const flash = require('express-flash');
 const path = require('path');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
 if (process.env.NODE_ENV === 'development') {
   // only use in development
   dotenv.config({ path: '.env.example' });
 } else {
   dotenv.config({ path: '.env' });
 }
 console.log("__dirname",__dirname)
/**
 * Controllers (route handlers).
 */
const appController = require('./controllers');

/**
 * Create Express server.
 */
const app = express();


/**
 * Express configuration.&& apply middlewares
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);

app.use(express.static('dist'))

app.use(compression());
//app.use(sass({
//  src: path.join(__dirname, 'public'),
//  dest: path.join(__dirname, 'public')
//}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');




// App Route
app.get('/', appController.home)
app.get('/test', appController.test)
app.post('/sentiment/analysis', appController.sentimentAnalysisController);



/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});
