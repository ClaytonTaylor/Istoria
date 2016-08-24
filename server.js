// //Required

// var port = process/port || 5000,
//  	express = require('express'),
//  	bodyParser = require('body-parser'),
//  	path = require('path');
//  	logger = require('morgan'),
//  	mongoose = require('mongoose'),
//  	Routes = require('routes'),
//  	// angularstyles = require('angular-ui-router-styles'),
// 	app = express();

// //Middleware

// app.use(logger('common'));
// app.use(express.static(path.join(__dirname+'/public')));

// mongoose.connect('mongodb://localhost/Istoria', (error) => {
// 	if(error) {
// 		console.error('Server could not start mongoose.', error);
// 		process.exit(1);
// 	} 
// 	else {
// 		console.log('Mongoose started Successfully.');
// 	}
// 	});

// app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }))

// require('routes')(app)

// Routes(app);


// app.listen(port, (error)=>{
// 	if(error) {
// 		console.error('Server could not Start!', error);
// 	}
// 	else {
// 		console.log('Istoria has Started Up!');
// 	}
// });

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./Routes'),
    path = require('path'),
    port = process.env.PORT || 5000,
    app = express();

//
// ──────────────────────────────────────────────────────────────────────────────
//   :::::: P A S S P O R T   S E T U P : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

app.set('session', session({
    secret : 'keyboard cat',
    resave : true,
    saveUninitialized : true
}));
app.use( app.get('session') );

app.use( passport.initialize() ); // Hooks into app
app.use( passport.session() ); // Hooks into sessions

// cookies are strings. strings are "SERIAL" data.
passport.serializeUser(function(user, done) {
    done(null, user);
}); // What passport is storing on the client (cookie)
passport.deserializeUser(function(user, done) {
    done(null, user);
}); // How passport finds the corresponding user using the cookie



passport.use(new GoogleStrategy({
    clientID: '828157815943-g295mm43nmal2m684grj7cvrgp88nt64.apps.googleusercontent.com',
    clientSecret: '2XQWf7KslMt7PNeazOm0z1pZ',
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('TOKENS', accessToken, refreshToken);
    console.log('PROFILE', profile);

    // Attempt to see if the user exists already in the DB
    UserModel.find({googleid : profile.id}, function(err, foundUser){

        if(!foundUser[0]){
            var newOne =  new UserModel({
                googleid : profile.id,
                name     : profile.name
            })

            newOne.save(function(err, savedUser){
                // User didn't exist before, now that they do, send them to pasport
                cb(null, savedUser)
            })
        }
        else{
            // User already exists, pass them off to passport
            cb(null, foundUser[0])
        }

    })


  }
));

// ────────────────────────────────────────────────────────────────────────────────


app.use(express.static(path.join(__dirname,'public')));

// make sure you have mongod running!
// connection string: 'mongodb://localhost/<db-name>'
mongoose.connect('mongodb://localhost/heroes-of-ajax', (error) => {
    if(error) {
        console.error('Oh no, could not start mongoose!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.');
    }
});

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, (error)=>{
    if(error) {
        console.error('Oh no, the server could not start!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Istoria is Up and Running.');
    }
});