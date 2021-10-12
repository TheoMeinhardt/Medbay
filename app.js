const express = require('express');
const https = require('https');
const router = require('./routes.js');
const path = require('path');
const fs = require('fs');

const app = express();
const credentials = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
};
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static(path.join(__dirname, 'public', 'css', '/')));
app.use(express.static(path.join(__dirname, 'public', 'images', '/')));
app.use(express.static(path.join(__dirname, 'public', 'js', '/')));

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log('\nServer listening on port ' + port);
});
