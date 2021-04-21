"use strict";
 class APIservice {
  constructor() {
  }

  /**
  ** @DESC sentiment Analysis by user input
  ** @look_at https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request
  **/
  async post() {
    try {
    } catch (e){
      console.log("service/MeaningCloud :", e)
      throw new Error("service/MeaningCloud :", e);
    }
  }

}

module.exports = APIservice;
