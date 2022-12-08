const express = require('express')
const router = express.Router()

const auth = require("../middlewares/auth.middleware")
const log = require("../middlewares/log.middleware")

const userRouter = require('./user.router')
const filmRouter = require("./film.router")
const privateDataRouter = require("./privateData.router")

router.use(log)

router.use('/api/v1/users', userRouter)
router.use('/api/v1/films', filmRouter)
router.use('/api/v1/privateDatas', auth, privateDataRouter)

router.all("*", (req, res) => { res.status(404).json({message : "404 : url incorrecte"})})
module.exports = router


