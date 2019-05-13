let friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        let newFriend = req.body;
        
        friendsData.push(newFriend);

        console.log(newFriend.totalScore);

        let totalScores = [];

        for (let i = 0; i < friendsData.length; i++) {

            let totalScore = friendsData[i].totalScore;
            totalScores.push(totalScore);

        }
        console.log("Total scores array: " + totalScores);

        solve(newFriend.totalScore, totalScores);

    });
};

function solve(num1, array) {
    
    for(let i = 0; i < array.length; i++) {
        let comparedScore = array[i] - num1;
        console.log(comparedScore);
    }
}
