"use strict";
const axios = require('axios');

 class APIservice {
  constructor() {
      this.instance = axios.create({
        baseURL: 'https://api.meaningcloud.com/sentiment-2.1',
        timeout: 1000,
        headers: {'Content-Type': 'multipart/form-data'}
      });
  }

  /**
  ** @DESC sentiment Analysis by user input
  ** @look_at https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request
  **/
  async Post() {
    try {
    } catch (e){
      throw new Error(e);
    }
  }


  /**
  ** @DESC sentiment Analysis by user input
  ** @look_at https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request
  **/
  async Get() {
    try {
    } catch (e){
      throw new Error( e);
    }
  }



}

module.exports = APIservice;
