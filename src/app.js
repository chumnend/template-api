"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const middleware = require("./middleware");

// configure the application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
if(config.env !== "test") {
    app.use(morgan("common"));
}

// setup routes
app.get("/", (req, res, next) => {
    res.send("ready to serve requests"); 
});

app.all("*", (req, res, next) => {
     return next({
        status: 404,
        message: "path not found"
     });
});

// error handling
app.use(middleware.handleError); 

// start the server
app.listen(config.port, () => {
    console.log("server started on port", config.port);
});

module.exports = app;
