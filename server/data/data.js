import axios from 'axios';
import fs from 'fs';

async function callApi(apikey, params) {
  let url = `https://api.fda.gov/drug/event.json?api_key=${apikey}&${params}`;

  return await axios({
    method: 'get',
    url: url,
    responseType: 'json',
  });
}

export default { callApi };
