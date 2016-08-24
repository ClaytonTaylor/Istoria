// Users Controller

// Require the model so we can access the collection
var User = require('../models/user');
// User => db.heroes
// User.find()
// db.users.find()


module.exports = {
    get : (req, res) => {
        // Read

        // Without Populate
        // User.find({}, function(err, users){
        //     res.json(users);
        // });

        // With Populate
        User.find({})
            .populate('userEquipment') // Property name of a User doc we want to populate
            .exec(function(err, users){
                res.json(users);
            }); // exec gives us a place to pass in the callback function find used to take.  Like a 'then' method for mongoose

        // Populate
        // {equipment : 8u58487909234u}
        // {equipment : {
        //     _id : 8u58487909234u,
        //     name : 
        //     cameraType
        // }}
    },
    // /api/users
    // /api/users/:id
    // /api/users/53982034abdsjc893
    // /api/v2/evolution-chain/215
    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newUser = new User(req.body);

            // Or, if req.body doesn't match your schema - manually construct the object you pass to new User
            // var newUser = new User({
            //     name : req.body.firstName + ' ' + req.body.lastName,
            //     powers : req.body.powers.split(', '),
            //     weaknesses : someOtherObj.stuff,
                
            // })

            // Save user to DB
            newUser.save(function(err, user){
                if(err){
                    return res.json(err);
                }
                res.json(user);
            });
        }

    },

    remove : (req, res) =>{
        // Delete
    }

}