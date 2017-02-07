const path = require('path');
const express = require('express');
const config = require('m3.intl.config');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src');

app.use('/public-dist', express.static(path.join(__dirname, '../public-dist')));
app.get('/', function(req, res) {
  res.render('main');
});

app.listen(config.get('port'), () => {
  console.log(`Server listening on port ${config.get('port')}`);
});
