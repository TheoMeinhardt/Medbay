// const express = require('express');
// const router = require('./routes.js');
// const path = require('path');
// const cors = require('cors');

import express from 'express';
import router from './routes.js';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('\nServer listening on port ' + port);
});
