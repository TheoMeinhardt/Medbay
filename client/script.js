const { createApp } = Vue;

async function getData(searchField, searchTerm, limit, count) {
  let partialUrl = `search=${searchField}:"${searchTerm}"&limit=${limit}`;

  const config = {
    method: 'get',
    url: 'http://127.0.0.1:3000/query/' + partialUrl,
    responseType: 'json',
  };
  const restResponse = await axios(config);

  return restResponse.data.results;
}

const myApp = {
  data() {
    return {
      medData: {},
    };
  },
  async created() {
    this.medData = await getData('patient.reaction.reactionmeddrapt', 'fatigue', 1);
  },
};

createApp(myApp).mount('#app');
