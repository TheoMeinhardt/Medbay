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
  console.log(standardQuery('patient.reaction.reactionmeddrapt', 'headache', 10));
  // console.log(countQuery('patient.drug.openfda.pharm_class_moa'));
  // console.log(standardQuery('patient.drug.openfda.pharm_class_epc', 'laxatives', 5));
})();
