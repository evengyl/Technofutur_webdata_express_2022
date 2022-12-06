require('dotenv').config()
const express = require('express')
const router = require('./routers/router')
const bodyParser = require('body-parser')

const port = process.env.PORT || process.env.PORT_LOCAL

const app = express()

app.use(bodyParser.json())
app.use(router)



app.listen(port, console.log("server démarré"))