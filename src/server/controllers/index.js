"use strict";
var MeaningCloud = require('./../services/MeaningCloud.js');
//const validator = require('validator');
// import local services
const dotenv = require('dotenv');
dotenv.config();


console.log(`Your API key is ${process.env.MeaningCloud_API_KEY}`);
var meaningCloud = new MeaningCloud(process.env.MeaningCloud_API_KEY)



/*
 * POST /analysis
 * sentiment analysis form in index page page.
*/
exports.home = (req, res) => {
  try {


  } catch (e) {
    res.send(e)
  }

};





/*
 * POST /analysis
 * sentiment analysis form in index page page.
*/
exports.test = (req, res) => {
  try {


  } catch (e) {
    res.send(e)
  }

};





/*
 * POST /analysis
 * sentiment analysis form in index page page.
*/
exports.sentimentAnalysisController = async (req, res) => {
  try {
    const { url } = req.body;

    // form input validation
    //......

    // call sercive
    const analysisRusalt = await meaningCloud.sentimentAnalysis(url)
    console.log("analysisRusalt :",analysisRusalt)
    res.send(analysisRusalt)

  } catch (e) {
    res.send(e)
  }

};
