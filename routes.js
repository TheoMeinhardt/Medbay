const express = require('express');
const data = require('./data/data.js');

const router = express.Router();
const apiKey = data.apiKey;

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/query/*', async (req, res) => {
  let dataRes = await data.callApi(apiKey, req.url.slice(7));
  res.json(dataRes.data);
});

module.exports = router;
