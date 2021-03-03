  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');

  app.use(express.static('static'));
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());

  // Load routing
  require('./route/index')(app);

  app.listen(3000, function() {
      console.log('Hello :3000');
  });