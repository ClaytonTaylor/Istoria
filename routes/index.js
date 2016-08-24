var userCtrl = require('./users');
var equipCtrl   = require('./equip');

var passport = require('passport');

module.exports = (app) => {

    // Routes go here

    // Passport Routes
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })); // Route that takes you to the google sign in page

    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    }); // Where google redirects you when the user is done signing in

    // User Routes
    app.get('/api/users', userCtrl.get);
    app.post('/api/users', userCtrl.upsert);
    
    // HQ Routes
    app.get('/api/equips', equipCtrl.get); // Find Many
    app.get('/api/equips/:id', equipCtrl.get); // Find One
    app.post('/api/equips', equipCtrl.upsert); // Create
    app.post('/api/equips/:id', equipCtrl.upsert); // Update
    
}