var path = require("path");
var friends = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        
        // Using a RegEx Pattern to remove spaces from newFriend
        
        console.log(friends);
        
            friends.push(req.body);
            res.json(true);
    });

};