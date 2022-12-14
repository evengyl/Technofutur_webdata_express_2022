const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req, res, next) => {

    console.log(req)
    if(req.headers["authorization"])    
    {
        let token = req.headers["authorization"].replace(/^Bearer\s+/, "");
        let res = jwt.verify(token, process.env.JWT_KEY)

        if(res.id){
            next()
        }
        else{
            res.status(401).json({message : "token invalid"})
        }
    }
    else{
        res.status(401).json({message : "unauthorized request"})
    }
        
}