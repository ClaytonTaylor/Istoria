//Required

var port = process/port || 5000,
 	express = require('express'),
 	bodyParser = require('body-parser'),
 	// path = require('path');
 	logger = require('morgan'),
 	mongoose = require('mongoose'),
 	Routes = require('routes'),
 	// angularstyles = require('angular-ui-router-styles'),
	app = express();

//Middleware

app.use(logger('common'));
app.use(express.static(__dirname+'/public'));

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }))

require('routes')(app)

app.listen(port, ()=> console.log('Server is up on port 5000'));