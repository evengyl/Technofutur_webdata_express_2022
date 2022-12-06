require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const dbConnection = require("./models/db")
dbConnection.connect()

const port = process.env.PORT || process.env.PORT_LOCAL

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


const router = require('./routers/router')
app.use(router)


app.listen(port, console.log("server démarré"))