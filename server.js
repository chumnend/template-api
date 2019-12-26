const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const config = require("./config");

const notFound = require("./middleware/notFound");
const handleError = require("./middleware/handleError");

// initilaize the application
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if( config.env !== 'test') {
    app.use(logger("common"));
}

// setup up routes
app.get("/", (req, res, next) => {
    res.send("Ready to serve requests");
});

app.use(notFound); // catch all middleware
app.use(handleError); // error handling middleware

// start the server
app.listen(config.port, () => {
    console.log('server listening on port', config.port);
});

module.exports = app;
