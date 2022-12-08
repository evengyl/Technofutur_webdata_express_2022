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

/* exmple callback style middleware */
/*
sayHello =(req, res, next) => {
    console.log(req)
    console.log(res)
    console.log("hello")
}*/

/* code source on y a pas accès */
/*
middleWare = (login, pass, callback) => {

    if(login == "root" && pass == "test1234"){
        let req = {}
        let res = {}
        let next = () => {}

        setTimeout(() => {
            callback(req, res, next)
        }, 2000);
    }
}

middleWare("root", "test1234", sayHello)
*/


/* promise exemple */
/*
resultDBQuery = new Promise((resolve, reject) => {
    //je contact ma db
    //si mysql me répond un truc sans code erreur 
    datas = { name : "loic", lastname : "baudoux" }
    setTimeout(() => {
        resolve(datas)
    }, 500)


    //je simule que la db m'a renvoyé un null, et donc une erreur de db
    // datas = null
    // setTimeout(() => {
    //     reject({ error : 500})
    // }, 2500)
})*/
/*
resultDBQuery
.then((datas) => {
    console.log("Resolve !!!!")
    console.log(datas)
})
.catch((error) => {
    console.log("Reject !!!!")
    console.log(error)
})
console.log("ici je n'ai pas encore les données de ma db de promesse")
*/


app.listen(port, console.log("server démarré"))