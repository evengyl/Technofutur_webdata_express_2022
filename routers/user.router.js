const express = require('express')
const userController = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.get('/', userController.getAll)                  //GET : localhost:3000/api/v1/users
userRouter.get('/:id([0-9]+)', userController.getOne)       //GET : localhost:3000/api/v1/users/:id
userRouter.post('/', userController.create)                 //POST : localhost:3000/api/v1/users/ + body de user à créer
userRouter.put('/:id([0-9]+)', userController.update)       //PUT : localhost:3000/api/v1/users/:id + body de user à modifier
userRouter.delete('/:id([0-9]+)', userController.delete)    //DELETE : localhost:3000/api/v1/users/:id

module.exports = userRouter