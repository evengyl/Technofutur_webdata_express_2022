const express = require('express')
const router = express.Router()
const userRouter = require('./user.router')
const filmRouter = require("./film.router")

router.use('/api/v1/users', userRouter)
router.use('/api/v1/films', filmRouter)

module.exports = router