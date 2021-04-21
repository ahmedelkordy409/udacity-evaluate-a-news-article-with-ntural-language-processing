"use strict";
const cors = require('cors');
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const appController = require('./controllers');

// Start up an instance of app
const app = express()


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)


// App Route
app.get('/', appController.home)

app.get('/test', appController.test)

app.post('/sentiment/analysis', appController.sentimentAnalysisController);



/**
 * Start Express server.
 */
 app.listen(8081, function () {
     console.log('Example app listening on port 8081!')
 })
