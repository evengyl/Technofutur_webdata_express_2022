const UserModel = require("../models/users.model")


const userController = {

    getOne : (req, res) => {
        UserModel.getOne(req.params.id).then((datas) => {
            res.status(200).json(datas)
        })
    },

    getAll : (req, res) => {
        UserModel.getAll().then((datas) => {
            res.status(200).json(datas)
        })
    },

    create : (req, res) => {
        const user = req.body
        if (user.nom && user.prenom && user.email && user.password)
        {
            UserModel.create(user.prenom, user.nom, user.email, user.password)
            .then((result) => {
                res.status(201).json({ id : result.insertId})
            })
            .catch((error) => {
                res.status(500).json({ message : error.sqlMessage})
            })
        }
    },

    update : (req, res) => {
        const user = req.body

        if (user.id && user.nom && user.prenom && user.email && user.password){

            UserModel.getOne(req.body.id).then((oldUser) => {
                if(oldUser[0].id)
                {
                    UserModel.update(user.id, user.prenom, user.nom, user.email, user.password)
                    .then((datas) => {
                        res.status(200).json({ message : "user updated"})
                    })
                }
                else{
                    res.status(404).json({ message : "user not found"})
                }
            })
        }
        else
        {
            res.sendStatus(400)
        }
    },
    
    delete : (req, res) => {
        const id = req.body.id

        UserModel.getOne(id).then((oldUser) => {
            if(oldUser[0].id)
            {
                UserModel.delete(id)
                .then((datas) => {
                    res.status(200).json({ message : "user deleted"})
                })
            }
            else{
                res.status(404).json({ message : "user not found"})
            }
        })
    },

}


module.exports = userController