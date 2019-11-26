// Load friends list
var friends = require("../data/friends");

module.exports = function (app) {

    // Get a JSON with all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Handle incoming survey results
    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        let userScore = req.body.scores.reduce((a,b) => parseInt(a) + parseInt(b), 0);
        console.log("user score: " + userScore);

        let matchScore = 100;
        var matchName = '';
        var matchPhoto = '';

        friends.forEach(friend => {
            let friendScore = friend.scores.reduce((a,b) => a + b, 0);
            console.log("friend " + friend.name + " score: " + friendScore);
            let compatibility = Math.abs(userScore - friendScore);

            if (compatibility < matchScore) {
                matchScore = compatibility;
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });

        let newFriend = {
            name: req.body.name,
            photo: req.body.picture,
            scores: req.body.scores
        }

        friends.push(newFriend);

        console.log("Added " + req.body.name + " to friends");
        console.log("Matched with " + matchName);

        res.json({matchName: matchName, matchPhoto: matchPhoto});
    });

}