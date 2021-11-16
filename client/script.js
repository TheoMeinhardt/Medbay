const { createApp } = Vue;

async function getData(searchField, searchTerm, limit, count) {
  let partialUrl = `search=${searchField}:"${searchTerm}"&limit=${limit}`;

  const config = {
    method: 'get',
    url: 'http://127.0.0.1:3000/query/' + partialUrl,
    responseType: 'json',
  };
  const restResponse = await axios(config);

  return restResponse;
}

const myApp = {
  data() {
    return {
      data: getData('patient.reaction.reactionmeddrapt', 'fatigue', 1),
    };
  },
};

createApp(myApp).mount('#app');
