"use strict";
export default class MeaningCloud {
  constructor(api_key) {
    this.api_key = api_key;
    this.baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
  }

  /**
  ** @DESC sentiment Analysis by user input
  ** @look_at https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request
  **/
  async sentimentAnalysis(input) {
    try {
      const { api_key,  baseURL} = this;

      const apiURL = `${baseURL}key=${api_key}&url=${input}&lang=en`;
      console.log("apiURL", apiURL)

      const apiCall = await fetch(apiURL)
      console.log("apiCall :", apiCall)

      const apiRes = await data.json()
      console.log("apiRes :", apiRes)

      return apiRes
    } catch (e){
      console.log("service/MeaningCloud :", e)
      throw new Error("service/MeaningCloud :", e);
    }
  }

}
