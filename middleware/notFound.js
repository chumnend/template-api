// a middleware for handling when an unkonwn route is found
module.exports = function(req, res, next) 
{
    return next({
        status: 404,
        message: "path not found"
    });
}
