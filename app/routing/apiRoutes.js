var path = require("path");
var friends = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        // store the request data in a variable
        var newfriend = req.body;

        // will eventually store the name and photo of the best match determined below in a variable to be returned in the res.json
        var friendMatch = {
            name: newfriend.name,
            photo: newfriend.photo,
        };

        // need a difference variable to compare the scores of the new friend and existing friend
        var difference = 0;

        // loop through the existing friends array from the friendsData.js file and any new friend pushed into that array
        for (i = 0; i < friends.length; i++) {
            // log name of friends in array for testing
            console.log(friends[i].name);

            // now loop through the scores of each in the array to compare to the new user scores to find difference
            for (j = 0; j < friends[i].scores.length; j++) {
                // now storing the difference of each score of the new friend to that of each in the array
                difference = Math.abs(parseInt(newfriend.scores[j]) - parseInt(friends[i].scores[j]));
                // console logging the difference for testing
                console.log(difference);

                // need to add the difference numbers for each friend in array to find a total difference for each
                // need to find the lowest difference number to get a match
                // need to store the name and photo of match in friendMatch variable and put in res.json below
                
                
            }
        }
        

        // makes int a positive number
        // Math.abs();

        friends.push(newfriend);
        // need to change to friendMatch once found
        res.json(newfriend);
    });

};