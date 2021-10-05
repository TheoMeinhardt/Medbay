const express = require('express');
const data = require('./data/data.js');

const router = express.Router();
const apiKey = data.apiKey;

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/query', async (req, res) => {
  let dataRes = await data.callApi(apiKey, 'patient.reaction.reactionmeddrapt', 'fatigue', 1);
  res.json(dataRes.data);
});

module.exports = router;
