const express = require('express')
const userController = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.get('/', userController.getAll) //GET : localhost:3000/api/v1/users
userRouter.get('/:id([0-9]+)', userController.getOne)
userRouter.post('/', userController.create)
userRouter.put('/', userController.update)
userRouter.delete('/:id([0-9]+)', userController.delete)

module.exports = userRouter