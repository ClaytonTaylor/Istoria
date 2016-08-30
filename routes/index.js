'use strict'

var Auth = require('./auth');
var userCtrl = require('./users');

module.exports = function(app) {
    // SITE ROOT
    app.get('/', (req, res) => { // replace this route with a landing or home page
        req.session.user? res.redirect('/dashboard') : res.redirect('/login');
    });
    app.get('/login', Auth.render); // route for the login page
    app.get('/logout', Auth.logout); // route for logging out

    // Users Routes
    app.get('/api/users', userCtrl.get);
    app.post('/api/users', userCtrl.upsert);

    app.post('/login', Auth.login); // form request endpoint for loggin in
    app.post('/register', Auth.register); // form request endpoint for user registration

    // DASHBOARD
    app.all('/dashboard*', Auth.session); // protect all dashboard routes from unauthorized users
    app.get('/dashboard', (req, res) => { // renders the dashboard
        res.render('dashboard.html', req.session)
    });
}
