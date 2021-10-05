import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

async function getData(): Promise<AxiosPromise<any>> {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'http://127.1.0.0:3000/query',
    responseType: 'json',
  };

  const restResponse: AxiosResponse<any> = await axios(config);

  return restResponse;
}

(async () => {
  console.log(await getData());
})();
