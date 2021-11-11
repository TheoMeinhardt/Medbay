const express = require('express');
const router = require('./routes.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('\nServer listening on port ' + port);
});
