function errorHandler(err, req, res, next){
    if (err.name === "UnauthorizedError") {
        //jwt authentication error
        return res.status(401).json({message: "The user is not authorized"})
    }

    if (err.name === "ValidationError") {
        //valiadation error
       return res.status(401).json({message: err})
    }
//default to 500 sever error
    return res.status(500).json({err})
}


module.exports = errorHandler