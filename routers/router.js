const express = require('express')
const router = express.Router()

const auth = require("../middlewares/auth.middleware")
const log = require("../middlewares/log.middleware")

const userRouter = require('./user.router')
const filmRouter = require("./film.router")
const privateDataRouter = require("./privateData.router")
const adminRouter = require("./admin.router")
const authRouter = require("./auth.router")

router.use(log)


router.use("/api/v1/auth", authRouter)
router.use('/api/v1/users', userRouter)
router.use('/api/v1/films', filmRouter)
router.use('/api/v1/privateDatas', auth, privateDataRouter)
router.use('/api/v1/admin', auth, adminRouter)

module.exports = router


