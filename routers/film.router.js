const express = require('express')
const filmController = require('../controllers/film.controller')

const filmRouter = express.Router()

filmRouter.get('/', filmController.getAll) //GET : localhost:3000/api/v1/users
filmRouter.get('/:id([0-9]+)', filmController.getOne)
filmRouter.post('/', filmController.create)
filmRouter.put('/', filmController.update)
filmRouter.delete('/:id([0-9]+)', filmController.delete)

module.exports = filmRouter