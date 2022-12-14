const express = require('express')

/* controller */
const userController = require('../controllers/user.controller')

/* middleware */
const orderBy = require("../middlewares/orderBy.middleware")
const auth = require("../middlewares/auth.middleware")


const router = express.Router()

router.get('/', auth, orderBy, userController.getAll)                  //GET : localhost:3000/api/v1/users
router.get('/:id([0-9]+)', userController.getOne)       //GET : localhost:3000/api/v1/users/:id
router.put('/:id([0-9]+)', userController.update)       //PUT : localhost:3000/api/v1/users/:id + body de user à modifier
router.delete('/:id([0-9]+)', auth, userController.delete)    //DELETE : localhost:3000/api/v1/users/:id

module.exports = router