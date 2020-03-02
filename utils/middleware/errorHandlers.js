const {config} = require("../../config")

function withErrorStack(error, stack){
    if(config.dev){
        return {error, stack}
    }
    return {error}
}

function logErrors(err,req,res,next){
    console.error(err);
    next(err);
}

function errorHandler(err,req,res,next){
    if(err){
        res.status(err.status || 500)
        res.json(withErrorStack(err.message,err.stack))
    }
    next();
}

module.exports = {logErrors, errorHandler}