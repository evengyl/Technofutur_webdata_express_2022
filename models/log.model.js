const dbConnect = require("./db").get()


const LogModel = {

    getAll : () => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM logs order by id desc`)
        })
    },


    create : (message) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO logs (message, date_created) VALUES (?, ?)", [message, new Date()])
        })
    },


    deleteAll : () => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from logs")
        })
    }
}


module.exports = LogModel