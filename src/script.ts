import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

async function getData(searchField: string, searchTerm: string, limit: number, count?: number): Promise<AxiosPromise<any>> {
  let partialUrl: string = `search=${searchField}:"${searchTerm}"&limit=${limit}`;

  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://localhost:8080/query/' + partialUrl,
    responseType: 'json',
  };

  const restResponse: AxiosResponse<any> = await axios(config);

  return restResponse;
}

(async () => {
  console.log(await getData('patient.reaction.reactionmeddrapt', 'fatigue', 2));
})();
