const UserModel = require("../models/user.model")


const userController = {


    getAll : (req, res) => {

        UserModel.getAll().then((datas) => {
            res.status(200).json(datas)
        })
    },


    getOne : (req, res) => {

        UserModel.getOne(req.params.id)
        .then((oneUser) => {

            if(oneUser[0])
            {
                res.status(200).json(oneUser)
            }
            else
            {
                res.status(404).json({ message : "user not found"})
            }
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
        else
        {
            res.status(500).json({ message : "Le corp de la requète est mal rempli"})
        }
    },


    update : (req, res) => {

        const user = req.body
        let id = req.params.id

        if (user.nom && user.prenom && user.email && user.password)
        {
            UserModel.getOne(id).then((oldUser) => {
                if(oldUser[0])
                {
                    UserModel.update(id, user.prenom, user.nom, user.email, user.password)
                    .then((datas) => {
                        res.status(200).json({ message : "user updated"})
                    })
                }
                else
                {
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

        let id = req.params.id

        UserModel.getOne(id).then((oldUser) => {
            if(oldUser[0])
            {
                UserModel.delete(id)
                .then((datas) => {
                    res.status(200).json({ message : "user deleted"})
                })
            }
            else
            {
                res.status(404).json({ message : "user not found"})
            }
        })
    },
}


module.exports = userController