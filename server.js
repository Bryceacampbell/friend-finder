let express = require("express");

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let path = require("path");
app.use(express.static(path.join(__dirname, "./app/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});