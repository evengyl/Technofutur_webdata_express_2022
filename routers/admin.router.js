const express = require('express')
const LogsController = require('../controllers/log.controller')

const router = express.Router()

router.get('/logs', LogsController.getAll)                     
router.delete('/logs', LogsController.deleteAll)    

module.exports = router
