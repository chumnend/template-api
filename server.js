const app = require("./app");
const config = require("./config");

// start the server
const port = config.PORT || 4000;
app.listen(port, () => {
    console.log("Server started on port", port);
})