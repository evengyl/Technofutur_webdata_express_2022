const mysql = require("promise-mysql")
require('dotenv').config()

let db

module.exports = {

    connect : () => {
        if(!db){
            db = mysql.createPool({
                host : process.env.HOST,
                user : process.env.USER,
                password : process.env.PASS,
                port : process.env.DB_PORT,
                database : process.env.DB,
                connectionLimit : process.env.CONNECT_LIMIT
            })
        }
    },

    get : () => {
        if(!db){
            console.log(db)
            throw new Error("Connection non établie")
        }
        else
            return db
    }
}