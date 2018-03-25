var path = require("path");
var friends = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        // store the request data in a variable
        var user = req.body;

        // will eventually store the name and photo of the best match determined below in a variable to be returned in the res.json
        var friendMatch;

        var maxDifference = 44;
        
        var bestMatchNameArray = [];
        var bestMatchPhotoArray = [];
        
        // loop through the existing friends array from the friendsData.js file and any new friend pushed into that array
        for (i = 0; i < friends.length; i++) {
            // log name of friends in array for testing
            // console.log(friends[i].name);
            var totalDifference = 0;
            // now loop through the scores of each in the array to compare to the new user scores to find difference
            for (j = 0; j < user.scores.length; j++) {
                // now storing the difference of each score of the new friend to that of each in the friends array
                var difference = Math.abs(parseInt(user.scores[j]) - parseInt(friends[i].scores[j]));
                // console logging the difference for testing
                // adding the difference of each value and creating a sum of total difference
                totalDifference += difference;
                // console log for testing
                // console.log(totalDifference); 
            }
            
            if (totalDifference < maxDifference) {
                maxDifference = totalDifference;
                friendMatch = friends[i];
                
                
            }
        }

        console.log(friendMatch);

        // makes int a positive number
        // Math.abs();

        friends.push(user);
        // need to change to friendMatch once found
        res.json(friendMatch);
    });

};