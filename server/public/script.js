const { createApp } = Vue;

async function standardQuery(searchField, searchTerm, limit) {
  let url = `search=${searchField}:"${searchTerm}"&limit=${limit}`;

  console.log(url);
  const restResponse = await axios.get('http://127.0.0.1:3000/standardquery?' + url);

  return restResponse.data.results;
}

async function countQuery(searchField) {
  let url = `count=${searchField}.exact`;

  const restResponse = await axios.get('http://127.0.0.1:3000/countquery?' + url);

  return restResponse.data.results;
}

const myApp = {
  data() {
    return {};
  },
};

createApp(myApp).mount('#app');

(async () => {
  console.log(standardQuery('patient.reaction.reactionmeddrapt', 'HEADACHE', 10));
  // console.log(countQuery('patient.reaction.reactionmeddrapt'));
  console.log(standardQuery('patient.drug', 'ASPIRIN', 5));
})();
