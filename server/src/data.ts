import axios, { AxiosResponse } from 'axios';

const apiKey = '0KywVsIRkpTgbCe3f403oH4EnyF5GqGC3F24kBFo';

async function callApi(apikey: string, params: string): Promise<AxiosResponse> {
  let url: string = `https://api.fda.gov/drug/event.json?api_key=${apikey}&${params}`;

  return await axios({
    method: 'get',
    url: url,
    responseType: 'json',
  });
}

export = { apiKey, callApi };
