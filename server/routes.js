const express = require('express');
const data = require('./data/data.js');

const router = express.Router();
const apiKey = data.apiKey;

router.get('/query/*', async (req, res) => {
  let dataRes = await data.callApi(apiKey, req.url.slice(7));
  res.json(dataRes.data);
});

router.get('*', (req, res) => {
  res.status(404).send('404 - not found');
});

module.exports = router;
