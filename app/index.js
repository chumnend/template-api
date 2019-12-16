const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("../config");

// initilaize the application
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if( config.NODE_ENV !== 'test') {
    app.use(morgan("common"));
}

app.get("/", (req, res, next) => {
    res.send("Ready to serve requests");
});

app.all("*", (req, res, next) => {
    return next({
        status: 404,
        message: "path not found"
    });
});

app.use( (error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message || "something went wrong"    
    });
});

module.exports = app;
