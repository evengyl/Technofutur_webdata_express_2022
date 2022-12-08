const express = require('express')
const filmController = require('../controllers/film.controller')

const filmRouter = express.Router()

filmRouter.get('/', filmController.getAll)                      //GET : localhost:3000/api/v1/films
filmRouter.get('/:id([0-9]+)', filmController.getOne)           //GET : localhost:3000/api/v1/films/:id
filmRouter.post('/', filmController.create)                     //POST : localhost:3000/api/v1/films + body du film a créer 
filmRouter.put('/:id([0-9]+)', filmController.update)           //PUT : localhost:3000/api/v1/films/:id + body du film a modifier
filmRouter.delete('/:id([0-9]+)', filmController.delete)        //DELETE : localhost:3000/api/v1/films/:id 

module.exports = filmRouter