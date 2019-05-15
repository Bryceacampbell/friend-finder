let friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        let newFriend = req.body;
        
        friendsData.push(newFriend);

        let comparedScoresArray = [];

        for (let i = 0; i < friendsData.length; i++) {

            let comparedScore = newFriend.totalScore - friendsData[i].totalScore;
            comparedScoresArray.push(Math.abs(comparedScore));
        }
        console.log("compared scores array: " + comparedScoresArray);

        console.log(Math.min.apply(null, comparedScoresArray));

    });
};

