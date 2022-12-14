const AuthModel = require("../models/auth.model.js")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const AuthController = {

    create : (req, res) => {

        const user = req.body

        if (user.nom && user.prenom && user.email && user.password)
        {
            AuthModel.create(user.prenom, user.nom, user.email, user.password)
            .then((result) => {
                res.status(201).json({ id : result.insertId})
            })
            .catch((error) => {
                res.status(500).json({ message : error.sqlMessage})
            })
        }
        else
        {
            res.status(500).json({ message : "Le corp de la requète est mal rempli"})
        }
    },



    authenticate : (req, res) => {
        let email = req.params.email

        if(email){
            AuthModel.verifyIfUserExist(email).then((isOk) => {
                //ok pour le token if true
                if(isOk[0]){
                    let userId = isOk[0].id
                    res.json({
                        jwt : jwt.sign({
                            id : userId
                        }, process.env.JWT_KEY, { expiresIn : 60*60})
                    })
                }
                else{
                    res.status(404).json({ message : "user not found"})
                }
            })
        }
    }


}


module.exports = AuthController