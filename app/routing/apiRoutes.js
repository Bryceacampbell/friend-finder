let friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {

        let newFriend = req.body;
        let newFriendScores = newFriend.scores;

        let matchName = '';
        let matchImage = '';
        let totalDifference = 10000;

        for (let i = 0; i < friendsData.length; i++) {

            let difference = 0;

            for (let j = 0; j < newFriendScores.length; j++) {
                difference += Math.abs(friendsData[i].scores[j] - newFriendScores[j]);
            }

            if (difference < totalDifference) {

                totalDifference = difference;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            }
        };

        friendsData.push(newFriend);

        res.json({ matchName: matchName, matchImage: matchImage });
    });
};







