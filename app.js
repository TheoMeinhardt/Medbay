const express = require('express');
const path = require('path');
const router = require('./routes.js');

const app = express();
let port = process.env.PORT || 3000;

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static(path.join(__dirname, 'public', 'css', '/')));
app.use(express.static(path.join(__dirname, 'public', 'images', '/')));
app.use(express.static(path.join(__dirname, 'public', 'js', '/')));

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
