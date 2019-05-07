
  var express = require('express'),   // Import express library
  app = express(),            // Initialize express object in the app variable
  port = 3000,                // Default node port to run your api server
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
  //comment this code while using in docker
  mongoose.Promise = global.Promise;
  mongoose
  .connect(
    'mongodb://localhost/Tododb',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  //Uncomment this while using in docker
  // mongoose
  // .connect(
  //   'mongodb://db:27017/Tododb',
  //   { useNewUrlParser: true }
  // )
  // .then(() => console.log('MongoDB Connected'))
  // .catch(err => console.log(err));



  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/todoListRoutes'); //importing route
  routes(app); //register the route


  app.listen(port);          // listening api requets on port 3000

  console.log('Node api server running on port ' + port);  // log to check whether server running or not

  app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'}) //Incase an invalid url is specified
});
