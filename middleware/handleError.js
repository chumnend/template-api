// a middleware for handling errors, returns JSON descibing the error
module.exports = function(error, req, res, next)
{
    res.status(error.status || 500).json({
        message: error.message || "something went wrong"    
    });
}
