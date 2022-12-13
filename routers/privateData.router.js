const express = require('express')
const privateDataController = require('../controllers/privateData.controller')

const router = express.Router()

router.get('/', privateDataController.getAll)                      //GET : localhost:3000/api/v1/privateDatas
router.get('/:id([0-9]+)', privateDataController.getOne)           //GET : localhost:3000/api/v1/privateDatas/:id

module.exports = router

/*
application des filtre !
si je veux un filtre ASCENDING
GET : localhost:3000/api/v1/films?order=asc -> que l'on récupère dans l'url avec : req.query.order !!!!
*/