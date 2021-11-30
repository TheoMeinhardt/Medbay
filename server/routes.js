import express from 'express';
import dotenv from 'dotenv';
import data from './data/data.js';

dotenv.config();

const router = express.Router();
const apiKey = process.env.API_KEY;

router.get('/standardquery?*', async (req, res) => {
  let dataRes = await data.callApi(apiKey, req.url.slice(15));
  res.json(dataRes.data);
});

router.get('/countquery?*', async (req, res) => {
  let dataRes = await data.callApi(apiKey, req.url.slice(12));
  res.status(200).json(dataRes.data);
});

export default router;
