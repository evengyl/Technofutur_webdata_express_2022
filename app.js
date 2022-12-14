require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

//Database
const dbConnection = require("./models/db")
dbConnection.connect()


//Port server
const port = process.env.PORT || process.env.PORT_LOCAL


//init app express
const app = express()


// use body parser for translate body request in json + form html
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


//routing
const router = require('./routers/router')
app.use(router)




//get swagger documentation api 
const swaggerUi = require("swagger-ui-express")
const yaml = require("yamljs")
const swaggerDocument = yaml.load("./swagger.yml")
//init swagger + init config
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


//routage pour la page 404
app.all("*", (req, res) => { res.status(404).json({message : "404 : url incorrecte"})})


app.listen(port, console.log("server démarré"))