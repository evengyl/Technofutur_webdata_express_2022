const dbConnect = require("./db").get()


const filmModel = {

    getAll : (orderBy) => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM films order by id ${orderBy}`)
        })
    },

    getOne : (id) => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM films WHERE id = ?', [id])
        })
    },

    create : (titre, dureeMin, descp) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO films (titre, dureeMin, descp) VALUES (?, ?, ?)", [titre, dureeMin, descp])
        })
    },

    update : (id, titre, dureeMin, descp) => {

        return dbConnect.then((conn) => {
            return conn.query('UPDATE films SET titre = ?, dureeMin = ?, descp = ? WHERE id = ?', [titre, dureeMin, descp, id])
        })
    },

    delete : (id) => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from films where id = ?", [id])
        })
    }
}


module.exports = filmModel