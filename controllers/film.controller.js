const filmModel = require("../models/film.model")
const filmsModel = require("../models/film.model")


const filmController = {

    getAll : (req, res, next) => {
        filmsModel.getAll()
        .then((allFilms) => {
            res.status(200).json(allFilms)
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        } )
    },

    getOne : (req, res, next) => {

        let id = req.params.id

        filmModel.getOne(id)
        .then((oneFilms) => {
            res.status(200).json(oneFilms)
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        } )
    },

    create : (req, res, next) => {
        let { titre, dureeMin, descp } = req.body

        filmModel.create(titre, dureeMin, descp)
        .then((result) => {
            res.status(201).json({ id : result.insertId})
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
    },

    update : (req, res, next) => {
        let { id, titre, dureeMin, descp } = req.body

        if(id && titre && dureeMin && descp)
        {
            filmModel.getOne(id)
            .then((oneFilms) => {
                
                if(oneFilms[0].id)
                {
                    filmModel.update(id, titre, dureeMin, descp)
                    .then((datas) => {
                        res.status(200).json({ message : "film updated"})
                    })
                    .catch((error) => {
                        res.status(500).json({ message : error.sqlMessage})
                    })
                }
                else
                {
                    res.status(404).json({ message : "film not exists"})
                }
            })
            .catch((error) => {
                res.status(500).json({ message : error.sqlMessage})
            } )

            
        }
    },

    delete : (req, res, next) => {
        let { id } = req.body

        if(id && titre && dureeMin && descp)
        {
            filmModel.getOne(id)
            .then((oneFilms) => {
                
                if(oneFilms[0].id)
                {
                    filmModel.delete(id)
                    .then((datas) => {
                        res.status(200).json({ message : "film deleted"})
                    })
                    .catch((error) => {
                        res.status(500).json({ message : error.sqlMessage})
                    })
                }
                else
                {
                    res.status(404).json({ message : "film not exists"})
                }
            })
            .catch((error) => {
                res.status(500).json({ message : error.sqlMessage})
            } )

            
        }
    }


}


module.exports = filmController