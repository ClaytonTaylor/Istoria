// Equipment controller
// Route handlers dealing with equips

var Equip = require('../models/user');

module.exports = {
    get : (req, res) => {
        if(req.params.id){
            // Find One
            Equip.findOne({ _id : req.params.id }, function(err, equip){
                res.json(equip);
            });
        }
        else{
            // Find Many
            Equip.find({}, function(err, equips){
                res.json(equips);
            });
        }
    },
    upsert : (req, res) =>{
        if(req.params.id){
            // Update
        }
        else{
            // Create
            var newEquip = new Equip(req.body);
            newEquip.save(function(err, doc){
                // res.json({success : 'Equipment successfully added!'});
                res.json(doc);
            });
        }
    }
}